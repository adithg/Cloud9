import React, { useState, useEffect } from 'react';
import Sunny from '../Icons/Sunny.svg';
import NightCloudy from '../Icons/NightCloudy.svg';
import Night from '../Icons/Night.svg';
import PartlyCloudy from '../Icons/PartlyCloudy.svg';

const icons = {
  Sunny,
  PartlyCloudy,
  NightCloudy,
  Night,
};

const Temperature = ({ city, temperature, description, humidity, feelsLike, time }) => {
  const [defaultIcon, setDefaultIcon] = useState(Sunny);

  useEffect(() => {
    const date = new Date(time);
    const timestring = time;
    const hour = parseInt(timestring.substring(0, 2));

    const weatherDescription = getWeatherDescription(description);

    if (hour >= 6 && hour < 18) {
      if (weatherDescription === "sunny") {
        setDefaultIcon(Sunny);
      } else if (weatherDescription === "cloudy") {
        setDefaultIcon(PartlyCloudy);
      }
    } else {
      if (weatherDescription === "sunny") {
        setDefaultIcon(Night);
      } else if (weatherDescription === "cloudy") {
        setDefaultIcon(NightCloudy);
      }
    }
  }, [time, description]);

  function getWeatherDescription(weatherDescription) {
    if (weatherDescription.includes("clear")) {
      return "sunny";
    } else if (weatherDescription.includes("cloud")) {
      return "cloudy";
    } else {
      return "unknown";
    }
  }
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
