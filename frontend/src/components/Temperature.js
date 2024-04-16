import React from 'react';
import Sunny from '../Icons/Sunny.svg';
import NightCloudy from '../Icons/NightCloudy.svg';
import Night from '../Icons/Night.svg';

const icons = {
  Sunny: Sunny,
  NightCloudy: NightCloudy,
  Night: Night,
};

const Temperature = ({ temperature, description, humidity, wind, feelsLike }) => {
  return (
    <div className="max-w-5xl mx-auto mt-16">
      <div className="grid grid-cols-4 items-center">
        <div className="col-span-1">
          <img src={icons[description.split(',')[0]]} className="h-[15rem] w-[15rem]" alt="Weather Icon" />
        </div>
        <div className="col-span-2">
          <div className="text-9xl font-bold mb-2 text-gray-100">{temperature}°</div>
          <div className="text-3xl font-medium text-gray-100">{description}</div>
        </div>
        <div className="col-span-1">
          <div className="flex items-center">
            <div className="text-4xl font-medium text-gray-100 mr-2 p-3">H</div>
            <div className="text-4xl font-medium text-gray-100 ">{humidity}%</div>
          </div>
          <div className="flex items-center">
            <div className="text-4xl font-medium text-gray-100 mr-2 p-4">L</div>
            <div className="text-4xl font-medium text-gray-100">{wind} mph</div>
          </div>
          <br />
          <div className="text-3xl font-medium mb-2 text-gray-100">Feels Like {feelsLike}°</div>
        </div>
      </div>
    </div>
  );
};

export default Temperature;