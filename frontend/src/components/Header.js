import React, { useState } from 'react';
import axios from 'axios';

const Header = ({
  setTemperature,
  setSunrise,
  setSunset,
  setPressure,
  setWindSpeed,
  setHumidity,
  setFeelsLike,
  setTime,
  setCity,
  setDescription
}) => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleKeyDown = (event) => {
    if (event.key === 'Enter') {
      search(searchTerm);
    }
  };

  const handleSearchClick = () => {
    search(searchTerm);
  };

  const search = (term) => {
    if (term.trim() === '') {
      alert('Please enter a search term');
      return;
    }

    axios.post('http://127.0.0.1:5000/get_current_weather_data_different_parsing', { location: term })
      .then(response => {
        const { city,temperature, sunrise, sunset, pressure, wind_speed, humidity, feels_like, description,time } = response.data;
        setCity(city);
        setTemperature(temperature);
        setSunrise(sunrise);
        setSunset(sunset);
        setPressure(pressure);
        setWindSpeed(wind_speed);
        setHumidity(humidity);
        setFeelsLike(feels_like);
        setDescription(description);
        setTime(time);
        setSearchTerm('');

      })
      .catch(error => {
        console.error(error);
        alert('Error fetching weather data');
      });
  };

  return (
    <header className="flex flex-wrap md:justify-start md:flex-nowrap z-50 w-full text-sm px-4 sm:px-0">
      <nav className="mt-8 relative max-w-5xl w-full bg-gray-100/[0.1] ring-gray-100/[0.3] ring-2 rounded-[36px] mx-2 py-8 px-4 md:flex md:items-center md:justify-between md:py-4 md:px-6 lg:px-8 xl:mx-auto" aria-label="Global">
        <div className="flex items-center justify-between">
          <button onClick={handleSearchClick}>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-6 h-6 text-gray-100">
              <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
            </svg>
          </button>
          <input
            type="text"
            placeholder="Search"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="text-xl ml-4 font-medium appearance-none border-0 focus:outline-none bg-gray-100/[0.0] py-2 px-4 text-gray-100 placeholder:text-gray-100 placeholder:bg-transparent"
            onKeyDown={handleKeyDown}
          />
        </div>
      </nav>
    </header>
  );
};

export default Header;
