import React from 'react';
import Sunny from '../Icons/SunnyWhite.svg';
import NightCloudy from '../Icons/NightCloudyWhite.svg';
import Night from '../Icons/NightWhite.svg';

const icons = {
  Sunny: Sunny,
  NightCloudy: NightCloudy,
  Night: Night,
};

const HourlyCard = ({ icon, time }) => {
  return (
    <div className="col-span-1 max-w-3xl mx-auto bg-gray-100/[0.1] border-gray-100/[0.3] border-2 rounded-xl flex flex-col justify-center items-center px-6 py-6 mt-8">
      <div className="font-medium text-xl text-gray-100">Now</div>
      <div>
        <img src={icon} className="h-24 w-24" alt="Weather Icon" />
      </div>
      <div className="font-medium text-2xl text-gray-100">{time}</div>
    </div>
  );
};

export default HourlyCard;