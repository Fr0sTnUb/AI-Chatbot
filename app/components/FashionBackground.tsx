import React from 'react';
import { HangerVector, DressVector, TShirtVector, ShoesVector, JewelryVector } from './FashionVectors';

const FashionBackground: React.FC = () => {
  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden opacity-[0.05]">
      {/* Top left decoration */}
      <div className="absolute -top-10 -left-10 w-48 h-48 transform rotate-12">
        <HangerVector />
      </div>
      
      {/* Top right decoration */}
      <div className="absolute top-20 right-10 w-40 h-40 transform -rotate-12">
        <DressVector />
      </div>
      
      {/* Bottom left decoration */}
      <div className="absolute bottom-20 left-10 w-36 h-36 transform rotate-45">
        <TShirtVector />
      </div>
      
      {/* Bottom right decoration */}
      <div className="absolute bottom-10 right-20 w-32 h-32 transform -rotate-20">
        <ShoesVector />
      </div>
      
      {/* Center decoration */}
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 opacity-20">
        <JewelryVector animate />
      </div>
      
      {/* Scattered small icons */}
      <div className="absolute top-1/4 left-1/3 w-16 h-16 transform rotate-30">
        <HangerVector />
      </div>
      <div className="absolute top-2/3 left-2/3 w-24 h-24 transform -rotate-15">
        <DressVector />
      </div>
      <div className="absolute top-3/4 left-1/4 w-20 h-20 transform rotate-60">
        <TShirtVector />
      </div>
    </div>
  );
};

export default FashionBackground; 