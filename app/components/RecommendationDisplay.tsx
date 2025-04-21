import { FiShoppingBag, FiPlus, FiCheck } from 'react-icons/fi';
import { AccessoryRecommendation } from '../utils/geminiApi';
import { cn } from '../utils/cn';
import { useState } from 'react';
import { JewelryVector, AccessoriesVector, ShoesVector } from './FashionVectors';

interface RecommendationDisplayProps {
  recommendations: AccessoryRecommendation | null;
  isLoading: boolean;
}

export default function RecommendationDisplay({ 
  recommendations, 
  isLoading 
}: RecommendationDisplayProps) {
  const [expandedItems, setExpandedItems] = useState<number[]>([]);
  
  const toggleItem = (index: number) => {
    setExpandedItems(prev => 
      prev.includes(index) 
        ? prev.filter(i => i !== index) 
        : [...prev, index]
    );
  };

  // Array of vector icons to cycle through for recommendation items
  const vectorIcons = [JewelryVector, AccessoriesVector, ShoesVector];
  
  if (isLoading) {
    return (
      <div className="card p-8 shadow-lg">
        <div className="animate-pulse space-y-6">
          <div className="flex items-center">
            <div className="w-10 h-10 rounded-full bg-dark-100"></div>
            <div className="h-6 bg-dark-100 rounded w-48 ml-4"></div>
          </div>
          
          <div className="space-y-6">
            {[1, 2, 3].map((i) => (
              <div key={i} className="space-y-2">
                <div className="h-5 bg-dark-100 rounded w-1/3"></div>
                <div className="h-4 bg-dark-100 rounded w-full"></div>
                <div className="h-4 bg-dark-100 rounded w-2/3"></div>
              </div>
            ))}
          </div>
          
          <div className="pt-4 border-t border-dark-100">
            <div className="h-4 bg-dark-100 rounded w-full"></div>
            <div className="h-4 bg-dark-100 rounded w-5/6 mt-2"></div>
          </div>
        </div>
      </div>
    );
  }

  if (!recommendations) {
    return null;
  }

  return (
    <div className="card pearl-effect">
      <div className="relative z-10 p-8">
        <h2 className="text-2xl font-semibold mb-6 flex items-center gradient-text">
          <div className="bg-dark-300 p-3 rounded-lg mr-3 shadow-[0_0_15px_rgba(255,59,59,0.2)]">
            <FiShoppingBag className="text-primary" size={24} />
          </div>
          Recommended Accessories
        </h2>
        
        <ul className="divide-y divide-dark-100 mb-6">
          {recommendations.items.map((item, index) => {
            const isExpanded = expandedItems.includes(index);
            const VectorIcon = vectorIcons[index % vectorIcons.length];
            
            return (
              <li key={index} className="py-4 interactive-element hover:bg-dark-300/30 rounded-lg p-2 transition-all duration-300">
                <div
                  className="flex justify-between items-start cursor-pointer"
                  onClick={() => toggleItem(index)}
                >
                  <div className="flex">
                    <div className="flex-shrink-0 mr-3 mt-1">
                      <div className="w-12 h-12 bg-dark-300 rounded-full flex items-center justify-center shadow-[0_0_10px_rgba(255,59,59,0.2)] hover:shadow-[0_0_15px_rgba(255,59,59,0.3)] transition-shadow duration-300">
                        <VectorIcon className="w-7 h-7" />
                      </div>
                    </div>
                    <div>
                      <h3 className="font-medium text-white text-lg">{item.name}</h3>
                      <p className={cn(
                        "text-gray-300 transition-all duration-300",
                        isExpanded ? "line-clamp-none mt-2" : "line-clamp-2"
                      )}>
                        {item.description}
                      </p>
                    </div>
                  </div>
                  <button 
                    className={cn(
                      "p-2 rounded-full border transition-all duration-300",
                      isExpanded 
                        ? "border-primary bg-primary bg-opacity-10 shadow-[0_0_10px_rgba(255,59,59,0.2)]" 
                        : "border-dark-100 hover:border-primary"
                    )}
                  >
                    {isExpanded ? (
                      <FiCheck className="text-primary" size={18} />
                    ) : (
                      <FiPlus className="text-gray-400" size={18} />
                    )}
                  </button>
                </div>
              </li>
            );
          })}
        </ul>
        
        {recommendations.explanation && (
          <div className="mt-6 pt-6 border-t border-dark-100 text-gray-300">
            <div className="flex items-start">
              <div className="flex-shrink-0 mr-4">
                <div className="w-12 h-12 flex items-center justify-center shadow-[0_0_10px_rgba(255,59,59,0.2)] bg-dark-300 rounded-full">
                  <AccessoriesVector className="w-7 h-7" />
                </div>
              </div>
              <p className="italic text-lg">{recommendations.explanation}</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
} 