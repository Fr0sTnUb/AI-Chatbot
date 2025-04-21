import { useCallback, useState } from 'react';
import { useDropzone } from 'react-dropzone';
import { FiUpload, FiX, FiImage } from 'react-icons/fi';
import Button from './Button';
import { cn } from '../utils/cn';
import { TShirtVector, DressVector } from './FashionVectors';

interface ImageUploaderProps {
  onImageSelect: (base64Image: string) => void;
  className?: string;
}

export default function ImageUploader({ onImageSelect, className }: ImageUploaderProps) {
  const [preview, setPreview] = useState<string | null>(null);
  const [dragging, setDragging] = useState(false);
  const [fileHover, setFileHover] = useState(false);

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
    onDragEnter: () => setDragging(true),
    onDragLeave: () => setDragging(false),
    onDropAccepted: () => setDragging(false),
    onDropRejected: () => setDragging(false),
  });

  const clearImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    setPreview(null);
  };

  return (
    <div className={cn("w-full", className)}>
      <div
        {...getRootProps()}
        className={cn(
          "border-2 border-dashed p-6 cursor-pointer transition-all flex flex-col items-center justify-center relative",
          "bg-dark-300 hover:bg-dark-200 interactive-element",
          (isDragActive || dragging) 
            ? "border-primary bg-dark-300" 
            : "border-dark-100 hover:border-primary",
          "rounded-xl min-h-[220px]"
        )}
        onMouseEnter={() => setFileHover(true)}
        onMouseLeave={() => setFileHover(false)}
      >
        <input {...getInputProps()} />
        
        {preview ? (
          <div className="relative w-full h-full text-center">
            <Button
              onClick={clearImage}
              className="absolute top-2 right-2 z-10 shadow-lg"
              variant="danger"
              size="sm"
              icon={<FiX size={16} />}
            >
              Clear
            </Button>
            <img
              src={preview}
              alt="Outfit preview"
              className="max-h-64 max-w-full rounded-lg object-contain mx-auto border border-dark-100 shadow-lg"
            />
            <p className="mt-3 text-gray-300 text-sm">
              <span className="text-primary">Ready for analysis!</span> Click "Generate Recommendations" to continue
            </p>
          </div>
        ) : (
          <div className={cn(
            "text-center transition-transform duration-300",
            fileHover && "scale-105"
          )}>
            <div className="pearl-effect rounded-full bg-dark-200 p-4 inline-block mb-4 relative">
              <div className="relative z-10">
                <FiUpload className="text-primary h-8 w-8" />
              </div>
              <div className="absolute -top-5 -right-6 transform rotate-12 opacity-20">
                <TShirtVector className="w-12 h-12" />
              </div>
              <div className="absolute -bottom-3 -left-6 transform -rotate-12 opacity-20">
                <DressVector className="w-12 h-12" />
              </div>
            </div>
            <p className="mt-2 text-gray-300">
              <span className="text-primary font-medium">Drag & drop</span> an outfit image, or <span className="text-primary font-medium">click to browse</span>
            </p>
            <p className="mt-1 text-xs text-gray-400">PNG, JPG, or WEBP format</p>
            <Button 
              className="mt-6" 
              variant="outline"
              size="md"
              icon={<FiImage />}
            >
              Select Image
            </Button>
          </div>
        )}
      </div>
    </div>
  );
} 