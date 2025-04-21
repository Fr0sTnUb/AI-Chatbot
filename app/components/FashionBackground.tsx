import React from 'react';
import { HangerVector, DressVector, TShirtVector, ShoesVector, JewelryVector } from './FashionVectors';

const FashionBackground: React.FC = () => {
  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden opacity-[0.12]">
      {/* Top left decoration */}
      <div className="absolute -top-10 -left-10 w-60 h-60 transform rotate-12 drop-shadow-[0_0_15px_rgba(255,59,59,0.2)]">
        <HangerVector />
      </div>
      
      {/* Top right decoration */}
      <div className="absolute top-20 right-10 w-52 h-52 transform -rotate-12 drop-shadow-[0_0_15px_rgba(255,59,59,0.2)]">
        <DressVector />
      </div>
      
      {/* Bottom left decoration */}
      <div className="absolute bottom-20 left-10 w-48 h-48 transform rotate-45 drop-shadow-[0_0_15px_rgba(255,59,59,0.2)]">
        <TShirtVector />
      </div>
      
      {/* Bottom right decoration */}
      <div className="absolute bottom-10 right-20 w-44 h-44 transform -rotate-20 drop-shadow-[0_0_15px_rgba(255,59,59,0.2)]">
        <ShoesVector />
      </div>
      
      {/* Center decoration */}
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 opacity-30 drop-shadow-[0_0_30px_rgba(255,59,59,0.3)]">
        <JewelryVector animate />
      </div>
      
      {/* Scattered small icons */}
      <div className="absolute top-1/4 left-1/3 w-24 h-24 transform rotate-30 drop-shadow-[0_0_10px_rgba(255,59,59,0.2)]">
        <HangerVector />
      </div>
      <div className="absolute top-2/3 left-2/3 w-32 h-32 transform -rotate-15 drop-shadow-[0_0_10px_rgba(255,59,59,0.2)]">
        <DressVector />
      </div>
      <div className="absolute top-3/4 left-1/4 w-28 h-28 transform rotate-60 drop-shadow-[0_0_10px_rgba(255,59,59,0.2)]">
        <TShirtVector />
      </div>
    </div>
  );
};

export default FashionBackground; 