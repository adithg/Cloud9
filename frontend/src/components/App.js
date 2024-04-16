import React, { useState } from 'react';
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
  const [temperature, setTemperature] = useState(null);
  const [sunrise, setSunrise] = useState('');
  const [sunset, setSunset] = useState('');
  const [pressure, setPressure] = useState(null);
  const [windSpeed, setWindSpeed] = useState(null);
  const [humidity, setHumidity] = useState(null);
  const [feelsLike, setFeelsLike] = useState(null);
  const [description, setDescription] = useState('');
  return (
    <div className="bg-gradient-to-b from-blue-600 to-sky-400">
      <Header 
      setTemperature={setTemperature}
      setSunrise={setSunrise}
      setSunset={setSunset}
      setPressure={setPressure}
      setWindSpeed={setWindSpeed}
      setHumidity={setHumidity}
      setFeelsLike={setFeelsLike}
      setDescription={setDescription}/>
      <Temperature
        temperature={temperature}
        description={description}
        humidity={humidity}
        wind={windSpeed}
        feelsLike={feelsLike}
      />
      <div className="text-3xl font-medium max-w-5xl mx-auto mt-16 text-gray-100">
        Details
      </div>
      <div className="grid grid-cols-4 max-w-4xl mx-auto">
        <WindCard icon={icons.WindWhite} speed={windSpeed} />
        <Sunrise icon={icons.SunriseWhite} sunrise={sunrise} />
        <Sunset icon={icons.SunsetWhite} sunset={sunset} />
        <Pressure icon={icons.PressureWhite} pressure={pressure} />
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