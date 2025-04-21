import React from 'react';
import { cn } from '../utils/cn';
import { 
  HangerVector, 
  DressVector, 
  TShirtVector, 
  ShoesVector, 
  AccessoriesVector, 
  JewelryVector 
} from './FashionVectors';

interface FashionIconsShowcaseProps {
  className?: string;
}

const FashionIconsShowcase: React.FC<FashionIconsShowcaseProps> = ({ className }) => {
  const fashionItems = [
    {
      icon: HangerVector,
      name: 'Clothing',
      description: 'From casual to formal'
    },
    {
      icon: DressVector,
      name: 'Dresses',
      description: 'Evening & everyday'
    },
    {
      icon: TShirtVector,
      name: 'Casual Wear',
      description: 'Comfort & style'
    },
    {
      icon: ShoesVector,
      name: 'Footwear',
      description: 'Complete your look'
    },
    {
      icon: JewelryVector,
      name: 'Jewelry',
      description: 'Statement pieces'
    },
    {
      icon: AccessoriesVector,
      name: 'Accessories',
      description: 'Personal touches'
    }
  ];

  return (
    <div className={cn("grid grid-cols-2 md:grid-cols-3 gap-4", className)}>
      {fashionItems.map((item, index) => (
        <div 
          key={index} 
          className="card interactive-element p-4 flex flex-col items-center text-center"
        >
          <div className="w-16 h-16 mb-3 p-2 bg-dark-300 rounded-full pearl-effect">
            <item.icon className="relative z-10" />
          </div>
          <h3 className="font-medium text-white mb-1">{item.name}</h3>
          <p className="text-gray-400 text-sm">{item.description}</p>
        </div>
      ))}
    </div>
  );
};

export default FashionIconsShowcase; 