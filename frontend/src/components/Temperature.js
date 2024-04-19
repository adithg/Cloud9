import React, { useState, useEffect } from 'react';
import Sunny from '../Icons/Sunny.svg';
import NightCloudy from '../Icons/NightCloudy.svg';
import Night from '../Icons/Night.svg';

const icons = {
  Sunny,
  NightCloudy,
  Night,
};

const Temperature = ({ city, temperature, description, humidity, feelsLike, time }) => {
  const [defaultIcon, setDefaultIcon] = useState(Sunny);

  useEffect(() => {
    const date = new Date(time);
    const hour = date.getHours();
    if (hour >= 6 && hour < 18) {
      setDefaultIcon(Sunny);
    } else {
      setDefaultIcon(Sunny);
    }
  }, [time]);

  const weatherIcon = description ? icons[description.split(',')[0]] || defaultIcon : defaultIcon;

  return (
    <div className="max-w-5xl mx-auto mt-16">
      <div className="grid grid-cols-4 items-center">
        <div className="col-span-1">
          <img src={weatherIcon} className="h-[15rem] w-[15rem]" alt="Weather Icon" />
        </div>
        <div className="col-span-2">
          <div className="text-9xl font-bold mb-2 text-gray-100">
            {temperature ? `${temperature}°F` : ''}
          </div>
          <div className="text-2xl font-medium text-gray-100">
            {city || ''}
          </div>
          <div className="text-2xl font-medium text-gray-100">
            {description || ''}
          </div>
          <div className="text-2xl font-medium text-gray-100">
            {time ? time : ''}
          </div>
        </div>
        <div className="col-span-1">
          <div className="flex items-center">
            <div className="text-3xl font-medium mb-2 text-gray-100 ">
            Humidity: {humidity ? `${humidity}%` : ''}
            </div>
          </div>
          <br />
          <div className="text-3xl font-medium mb-2 text-gray-100">
            Feels Like:  {feelsLike ? `${feelsLike}°F` : ''}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Temperature;