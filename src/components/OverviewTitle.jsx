import React from "react";
import likeIcon from '../assets/likeIcon.svg';
import shareIcon from '../assets/shareIcon.svg';
import phoneCallIcon from '../assets/phoneCallIcon.svg';
import mapPin from '../assets/mapPin.svg';
import globe from '../assets/globeIcon.svg';
import starIcon from '../assets/starIcon.svg'

function OverviewTitle({
  logo,
  name,
  rating,
  reviewCount,
  location,
  phone,
  website,
  description,
  mapImage,
}) {
  return (
    <div className="p-6 mx-auto max-w-7xl">
      <div className="flex justify-between gap-3 mb-8">
        <div className="flex items-center justify-center gap-3">
          <img src={logo} alt={name} className="object-contain h-52 w-52" />
          <div className="flex flex-col items-start gap-3 pt-5">
            <div className="flex items-center justify-center gap-3 mb-3">
              <h1 className="text-4xl font-bold">{name}</h1>
              <div className="flex items-end gap-1 text-sm">
                <img src={starIcon} className="w-3.5 h-3.5 mb-1 text-yellow-400 fill-yellow-400" />
                <span className="">{rating}</span>
                <span className="text-gray-500">({reviewCount})</span>
              </div>
            </div>

            <div className="flex items-center gap-8 mb-8 text-gray-600">
              <div className="flex items-center gap-2">
                <img src={mapPin} className="w-5 h-5" />
                <span>{location}</span>
              </div>
              <div className="flex items-center gap-2">
              <img src={phoneCallIcon} className="w-5 h-5" />
                <span>{phone}</span>
              </div>
              <div className="flex items-center gap-2">
              <img src={globe} className="w-5 h-5" />
                <a href={website} className="text-gray-600 underline">
                  Website
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="flex gap-4">
          <button className="p-2 rounded-full">
            <img src={shareIcon} alt="share" className="w-5 h-5" />
          </button>
          <button className="rounded-full">
            <img src={likeIcon} alt="like" className="w-5 h-5" />
          </button>
        </div>
      </div>

      <div className="flex w-full gap-8 mt-16">
        <div className="w-2/3 pr-10">
          <h2 className="mb-4 text-4xl font-medium">Overall info</h2>
          <p className="text-lg text-gray-600 whitespace-pre-wrap">
            {description}
          </p>
        </div>
        <div className="w-1/3">
          <img
            src={mapImage}
            alt="Location map"
            className="w-full h-[400px] object-cover rounded-lg mb-4"
          />
        </div>
      </div>
    </div>
  );
}

export default OverviewTitle;
