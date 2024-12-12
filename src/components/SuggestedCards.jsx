import React from 'react';
import starIcon from '../assets/starIcon.svg';
import MapPinIcon from '../assets/mapPin.svg';

function SuggestedCard({ logo, name }) {
  return (
    <div className="flex items-center gap-4 p-4 bg-white rounded-lg">
      <img 
        src={logo} 
        alt={name}
        className="object-contain w-32 h-32"
      />
      
      <div>
        <h3 className="mb-1 text-lg font-medium">{name}</h3>
        <div className="flex items-center gap-2 mb-1">
          <img src={starIcon} className="w-5 h-5 text-orange-400 fill-orange-400" />
          <span className="font-medium">4.8</span>
          <span className="text-gray-500">(12694)</span>
        </div>
        <div className="flex items-center gap-1 text-gray-500">
          <img src={MapPinIcon} className="w-4 h-4" />
          <span>{"0.5 km from center"}</span>
        </div>
      </div>
    </div>
  );
};

export default SuggestedCard;

