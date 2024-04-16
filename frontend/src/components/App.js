import React from 'react';
import Header from './Header';
import Temperature from './Temperature';
import HourlyCard from './HourlyCard';
import Sunny from '../Icons/SunnyWhite.svg';
import NightCloudy from '../Icons/NightCloudyWhite.svg';
import Night from '../Icons/NightWhite.svg';

const icons = {
  Sunny: Sunny,
  NightCloudy: NightCloudy,
  Night: Night,
};

const App = () => {
  return (
    <div className="bg-gradient-to-b from-blue-600 to-sky-400">
      <Header />
      <Temperature
        temperature={77}
        description="Sunny, Clear Skies"
        humidity={82}
        wind={60}
        feelsLike={60}
      />
      <div className="text-3xl font-medium max-w-5xl mx-auto mt-16 text-gray-100">
        Hourly
      </div>
      <div className="grid grid-cols-6 max-w-5xl mx-auto">
        <HourlyCard icon={icons.Sunny} time="7pm" />
        <HourlyCard icon={icons.NightCloudy} time="7pm" />
        <HourlyCard icon={icons.NightCloudy} time="7pm" />
        <HourlyCard icon={icons.Night} time="7pm" />
        <HourlyCard icon={icons.Night} time="7pm" />
        <HourlyCard icon={icons.Night} time="7pm" />
      </div>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
    </div>
  );
};

export default App;