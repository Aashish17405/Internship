import React from 'react';
import starIcon from '../assets/starIcon.svg';
import thumbsUpIcon from '../assets/thumbsUpIcon.svg';
import thumbsDownIcon from '../assets/thumbsDownIcon.svg'

function Review({ name, date, rating, review, likes, dislikes }){
  return (
    <div className="p-4">
      <div className="flex items-center gap-3 mb-2">
        <span className="text-lg font-semibold">{name}</span>
        <span className="text-gray-500">{date}</span>
      </div>
      
      <div className="flex mb-4">
        {[...Array(5)].map((_, index) => (
          <img src={starIcon}
            key={index}
            className={`w-5 h-5 mr-2 ${index < rating ? 'fill-orange-400 text-orange-400' : 'fill-gray-200 text-gray-200'}`}
          />
        ))}
      </div>

      <p className="mb-4 leading-relaxed text-gray-700">
        {review}
      </p>

      <div className="flex items-center gap-4">
        <button className="flex items-center gap-2 text-gray-500">
          <img src={thumbsUpIcon} className="w-5 h-5" />
          <span>{likes}</span>
        </button>
        <button className="flex items-center gap-2 text-gray-500">
          <img src={thumbsDownIcon} className="w-5 h-5" />
          <span>{dislikes}</span>
        </button>
      </div>
    </div>
  );
};

export default Review;

