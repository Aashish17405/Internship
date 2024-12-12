import React from 'react';
import { useNavigate } from 'react-router-dom';
import starIcon from '../assets/starIcon.svg';
import panels from '../assets/panels.svg';

function Card({ image, title, description }) {
  const navigate = useNavigate();

  return (
    <button
      onClick={() => navigate('/overview')}
      className="flex flex-col bg-white border border-[#D9D9D9] rounded-md shadow-sm w-full sm:w-64 max-w-[280px] mx-auto transition-transform transform hover:scale-105"
    >
      <div className="flex h-36 overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-contain p-4"
        />
      </div>
      <div className="flex flex-col flex-grow p-4 text-left">
        <img
          src={panels}
          alt="Panels badge"
          className="my-2 self-start w-12"
        />
        <h3 className="text-lg text-[#111827] mb-2 font-semibold truncate">
          {title}
        </h3>
        <p className="text-[#4E5562] text-sm flex-grow min-h-[48px] line-clamp-2">
          {description}
        </p>
        <div className="flex items-center text-sm mt-4">
          <img
            src={starIcon}
            alt="Star Icon"
            className="mr-2 w-4 h-4"
          />
          <span>4.6 (7523)</span>
        </div>
      </div>
    </button>
  );
}

export default Card;
