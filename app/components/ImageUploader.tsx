import { useCallback, useState } from 'react';
import { useDropzone } from 'react-dropzone';
import { FiUpload, FiX } from 'react-icons/fi';

interface ImageUploaderProps {
  onImageSelect: (base64Image: string) => void;
}

export default function ImageUploader({ onImageSelect }: ImageUploaderProps) {
  const [preview, setPreview] = useState<string | null>(null);

  const onDrop = useCallback(
    (acceptedFiles: File[]) => {
      if (acceptedFiles.length === 0) return;

      const file = acceptedFiles[0];
      if (!file.type.startsWith('image/')) return;

      const reader = new FileReader();
      reader.onload = () => {
        const base64Image = reader.result as string;
        setPreview(base64Image);
        onImageSelect(base64Image);
      };
      reader.readAsDataURL(file);
    },
    [onImageSelect]
  );

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: {
      'image/*': ['.jpeg', '.jpg', '.png', '.webp'],
    },
    maxFiles: 1,
  });

  const clearImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    setPreview(null);
  };

  return (
    <div className="w-full">
      <div
        {...getRootProps()}
        className={`border-2 border-dashed rounded-lg p-6 cursor-pointer transition-colors ${
          isDragActive 
            ? 'border-primary bg-blue-50' 
            : 'border-gray-300 hover:border-primary'
        } flex flex-col items-center justify-center relative`}
        style={{ minHeight: '220px' }}
      >
        <input {...getInputProps()} />
        
        {preview ? (
          <div className="relative w-full h-full">
            <button
              onClick={clearImage}
              className="absolute top-2 right-2 z-10 p-1 bg-white rounded-full shadow-md hover:bg-gray-100"
            >
              <FiX size={20} />
            </button>
            <img
              src={preview}
              alt="Outfit preview"
              className="max-h-64 max-w-full rounded-md object-contain mx-auto"
            />
          </div>
        ) : (
          <div className="text-center">
            <FiUpload className="mx-auto h-12 w-12 text-gray-400" />
            <p className="mt-2 text-sm text-gray-600">
              Drag & drop an outfit image, or <span className="text-primary font-medium">click to browse</span>
            </p>
            <p className="mt-1 text-xs text-gray-500">PNG, JPG, or WEBP</p>
          </div>
        )}
      </div>
    </div>
  );
} 