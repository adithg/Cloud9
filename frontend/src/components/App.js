import React from 'react';
import Header from './Header';
import Sunrise from './Sunrise';
import Sunset from './Sunset';
import UVI from './UVI';
import Pressure from './Pressure';
import Temperature from './Temperature';
import HourlyCard from './HourlyCard';
import Sunny from '../Icons/SunnyWhite.svg';
import NightCloudy from '../Icons/NightCloudyWhite.svg';
import Night from '../Icons/NightWhite.svg';
import WindCard from './WindCard';
import WindWhite from '../Icons/WindWhite.svg'
import SunriseWhite from '../Icons/SunriseWhite.svg'
import SunsetWhite from '../Icons/SunsetWhite.svg'
import PressureWhite from '../Icons/PressureWhite.svg'
import UvWhite from '../Icons/UvWhite.svg'

const icons = {
  Sunny: Sunny,
  NightCloudy: NightCloudy,
  Night: Night,
  WindWhite: WindWhite,
  SunriseWhite: SunriseWhite,
  SunsetWhite: SunsetWhite,
  PressureWhite: PressureWhite,
  UvWhite: UvWhite
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
      <div className="grid grid-cols-5 max-w-5xl mx-auto">
        <WindCard icon={icons.WindWhite} speed="34 kts" />
        <Sunrise icon={icons.SunriseWhite} sunrise="7:19 am" />
        <Sunset icon={icons.SunsetWhite} sunset="6:34 pm" />
        <UVI icon={icons.UvWhite} uvi="78" />
        <Pressure icon={icons.PressureWhite} pressure="12 mb" />
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