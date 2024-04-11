import React from 'react';

const HourlyCard = ({ icon, time }) => {
  return (
    <div className="col-span-1 max-w-3xl mx-auto bg-gray-100 rounded-xl flex flex-col justify-center items-center px-6 py-6 mt-8">
      <div className="font-medium text-xl text-gray-500">Now</div>
      <div>
        <img src={icon} className="h-24 w-24" alt="Weather Icon" />
      </div>
      <div className="font-medium text-2xl text-gray-500">{time}</div>
    </div>
  );
};

export default HourlyCard;