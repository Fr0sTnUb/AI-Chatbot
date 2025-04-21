import { FiShoppingBag } from 'react-icons/fi';
import { AccessoryRecommendation } from '../utils/geminiApi';

interface RecommendationDisplayProps {
  recommendations: AccessoryRecommendation | null;
  isLoading: boolean;
}

export default function RecommendationDisplay({ 
  recommendations, 
  isLoading 
}: RecommendationDisplayProps) {
  if (isLoading) {
    return (
      <div className="border rounded-lg p-6 mt-6 bg-white shadow-sm">
        <div className="animate-pulse">
          <div className="h-4 bg-gray-200 rounded w-3/4 mb-4"></div>
          <div className="space-y-3">
            {[1, 2, 3].map((i) => (
              <div key={i} className="grid grid-cols-4 gap-4">
                <div className="h-3 bg-gray-200 rounded col-span-1"></div>
                <div className="h-3 bg-gray-200 rounded col-span-3"></div>
              </div>
            ))}
          </div>
          <div className="h-4 bg-gray-200 rounded w-2/3 mt-6"></div>
        </div>
      </div>
    );
  }

  if (!recommendations) {
    return null;
  }

  return (
    <div className="border rounded-lg p-6 mt-6 bg-white shadow-sm">
      <h2 className="text-xl font-semibold mb-4 flex items-center">
        <FiShoppingBag className="mr-2" /> 
        Recommended Accessories
      </h2>
      
      <ul className="divide-y">
        {recommendations.items.map((item, index) => (
          <li key={index} className="py-3">
            <h3 className="font-medium">{item.name}</h3>
            <p className="text-gray-600 text-sm">{item.description}</p>
          </li>
        ))}
      </ul>
      
      {recommendations.explanation && (
        <div className="mt-4 pt-4 border-t text-sm text-gray-700">
          <p className="italic">{recommendations.explanation}</p>
        </div>
      )}
    </div>
  );
} 