**Weather App**
A simple weather app built with Flask and React that displays current weather conditions for a given location.

**Features**
Search for weather conditions by city name
Displays current temperature, humidity, wind speed, and weather description
Shows sunrise and sunset times
Displays pressure and wind direction
Responsive design for mobile and desktop devices
Backend
The backend is built using Flask, a Python web framework. It uses the OpenWeatherMap API to fetch current weather data for a given location. The API endpoints are:

/get_location_coordinates: Converts a location to latitude and longitude coordinates
/get_current_weather_data: Fetches current weather data for a given latitude and longitude
/get_current_weather_data_different_parsing: Fetches current weather data for a given location (alternative parsing)
Frontend
The frontend is built using React, a JavaScript library for building user interfaces. It uses Axios to make API requests to the backend. The app is divided into several components:

App.js: The main app component that renders the weather data
Header.js: The header component that handles search input and API requests
Temperature.js: The temperature component that displays current weather conditions
Card.js: Our various components for displayinf information

**Icons**
The app uses custom icons for sunny, cloudy, and night weather conditions.

Setup
To run the app, follow these steps:

Clone the repository
Install the required dependencies using pip install -r requirements.txt (for the backend) and npm install (for the frontend)
Run the backend using python app.py
Run the frontend using npm start
Open the app in your web browser at http://localhost:3000
