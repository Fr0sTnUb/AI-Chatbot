'use client';

import { useState } from 'react';
import ImageUploader from './components/ImageUploader';
import RecommendationDisplay from './components/RecommendationDisplay';
import { AccessoryRecommendation } from './utils/geminiApi';
import { FiCamera, FiInfo, FiMessageSquare } from 'react-icons/fi';

export default function Home() {
  const [recommendations, setRecommendations] = useState<AccessoryRecommendation | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [customPrompt, setCustomPrompt] = useState('');

  async function handleImageSelect(base64Image: string) {
    setIsLoading(true);
    setError(null);
    
    try {
      const response = await fetch('/api/recommend', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ 
          image: base64Image,
          prompt: customPrompt 
        }),
      });

      if (!response.ok) {
        throw new Error('Failed to get recommendations');
      }

      const data = await response.json();
      setRecommendations(data);
    } catch (err) {
      setError('Something went wrong. Please try again.');
      console.error('Error getting recommendations:', err);
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <div className="max-w-4xl mx-auto">
      <header className="text-center mb-8">
        <h1 className="text-3xl font-bold mb-2">Outfit Accessory Recommender</h1>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Upload a photo of your outfit and get personalized accessory recommendations powered by Gemini AI.
        </p>
      </header>

      <div className="bg-white rounded-lg shadow-md p-6 mb-6">
        <div className="flex items-center mb-4">
          <FiCamera className="text-primary mr-2" />
          <h2 className="text-xl font-semibold">Upload Your Outfit</h2>
        </div>
        
        <div className="mb-4">
          <div className="flex items-center mb-2">
            <FiMessageSquare className="text-primary mr-2" />
            <h3 className="font-medium">Custom Prompt (Optional)</h3>
          </div>
          <textarea 
            className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
            placeholder="Add any specific requirements or preferences (e.g., 'I need accessories for a formal event' or 'I prefer gold jewelry')"
            rows={3}
            value={customPrompt}
            onChange={(e) => setCustomPrompt(e.target.value)}
          />
        </div>
        
        <ImageUploader onImageSelect={handleImageSelect} />

        {error && (
          <div className="mt-4 p-3 text-red-700 bg-red-100 rounded-md flex items-start">
            <FiInfo className="mr-2 mt-0.5 flex-shrink-0" />
            <p>{error}</p>
          </div>
        )}
      </div>

      <RecommendationDisplay 
        recommendations={recommendations} 
        isLoading={isLoading} 
      />

      <footer className="mt-12 text-center text-sm text-gray-500">
        <p>Powered by Gemini AI - Get stylish accessory recommendations in seconds</p>
      </footer>
    </div>
  );
} 