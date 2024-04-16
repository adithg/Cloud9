import React from 'react';

const UVI = ({ icon, uvi }) => {
  return (
    <div className="col-span-1 max-w-4xl mx-auto bg-gray-100/[0.1] border-gray-100/[0.3] border-2 rounded-xl flex flex-col justify-center items-center px-10 py-8 mt-8">
      <div className="font-medium text-xl text-gray-100"> UVI </div>
      <div>
        <img src={icon} className="h-24 w-24" alt="UVI Icon" />
      </div>
      <div className="font-medium text-2xl text-gray-100">{uvi}</div>
    </div>
  );
};

export default UVI;