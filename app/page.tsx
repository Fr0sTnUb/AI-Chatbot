'use client';

import { useState, useEffect } from 'react';
import ImageUploader from './components/ImageUploader';
import RecommendationDisplay from './components/RecommendationDisplay';
import { AccessoryRecommendation } from './utils/geminiApi';
import { FiCamera, FiInfo, FiMessageSquare, FiZap, FiTrendingUp } from 'react-icons/fi';
import toast from 'react-hot-toast';
import Button from './components/Button';
import { cn } from './utils/cn';
import FashionIconsShowcase from './components/FashionIconsShowcase';
import { AccessoriesVector } from './components/FashionVectors';

export default function Home() {
  const [recommendations, setRecommendations] = useState<AccessoryRecommendation | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [customPrompt, setCustomPrompt] = useState('');
  const [uploadedImage, setUploadedImage] = useState<string | null>(null);
  const [animateTitle, setAnimateTitle] = useState(false);

  useEffect(() => {
    // Add title animation on initial load
    setAnimateTitle(true);
    
    // Remove animation after it completes
    const timer = setTimeout(() => {
      setAnimateTitle(false);
    }, 1000);
    
    return () => clearTimeout(timer);
  }, []);

  async function handleImageSelect(base64Image: string) {
    setUploadedImage(base64Image);
    toast.success('Image uploaded successfully!');
  }

  async function handleSubmit() {
    if (!uploadedImage) {
      toast.error('Please upload an image first');
      return;
    }
    
    setIsLoading(true);
    setError(null);
    
    const loadingToast = toast.loading('Analyzing your outfit...');
    
    try {
      const response = await fetch('/api/recommend', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ 
          image: uploadedImage,
          prompt: customPrompt 
        }),
      });

      if (!response.ok) {
        throw new Error('Failed to get recommendations');
      }

      const data = await response.json();
      setRecommendations(data);
      toast.success('Recommendations ready!', { id: loadingToast });
    } catch (err) {
      setError('Something went wrong. Please try again.');
      console.error('Error getting recommendations:', err);
      toast.error('Failed to analyze image', { id: loadingToast });
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <div className="max-w-4xl mx-auto">
      <header className="text-center mb-12 mt-6">
        <div className="flex justify-center items-center mb-3">
          <AccessoriesVector className="w-12 h-12 animate-pulse-slow" />
        </div>
        <h1 
          className={cn(
            "text-4xl font-bold mb-4 text-white relative inline-block gradient-text",
            animateTitle && "animate-pulse-slow"
          )}
        >
          <span className="pearl-effect">SaxMachine</span>
        </h1>
      </header>

      <div className="card p-8 mb-8 pearl-effect">
        <div className="relative z-10">
          <div className="flex items-center mb-6">
            <FiCamera className="text-primary mr-3 text-xl" />
            <h2 className="text-2xl font-semibold gradient-text">Upload Your Outfit</h2>
          </div>
          
          <div className="mb-6">
            <div className="flex items-center mb-3">
              <FiMessageSquare className="text-primary mr-2" />
              <h3 className="font-medium text-white">Custom Prompt (Optional)</h3>
            </div>
            <textarea 
              className="w-full p-4 bg-dark-300 border border-dark-100 text-white rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all resize-none interactive-element"
              placeholder="Add any specific requirements or preferences (e.g., 'I need accessories for a formal event' or 'I prefer gold jewelry')"
              rows={3}
              value={customPrompt}
              onChange={(e) => setCustomPrompt(e.target.value)}
            />
          </div>
          
          <ImageUploader onImageSelect={handleImageSelect} className="mb-6" />

          <div className="flex justify-end">
            <Button 
              onClick={handleSubmit} 
              isLoading={isLoading}
              disabled={!uploadedImage}
              icon={<FiZap />}
              className="interactive-element"
              size="lg"
            >
              Generate Recommendations
            </Button>
          </div>

          {error && (
            <div className="mt-6 p-4 bg-accent-500 bg-opacity-10 border border-accent-500 border-opacity-20 rounded-lg flex items-start">
              <FiInfo className="text-accent-400 mr-3 mt-0.5 flex-shrink-0" />
              <p className="text-white">{error}</p>
            </div>
          )}
        </div>
      </div>

      {!recommendations && !isLoading && (
        <div className="mb-12">
          <div className="flex items-center mb-6">
            <FiTrendingUp className="text-primary mr-3 text-xl" />
            <h2 className="text-2xl font-semibold gradient-text">Fashion Categories</h2>
          </div>
          <FashionIconsShowcase />
        </div>
      )}

      <RecommendationDisplay 
        recommendations={recommendations} 
        isLoading={isLoading} 
      />
    </div>
  );
} 