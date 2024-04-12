import requests
import json
from flask import Flask, request, jsonify

def get_weather_data(location):
    # Geocode the location to get the latitude and longitude
    url = f"http://api.openweathermap.org/geo/1.0/direct?q={location}&appid=f8ae1807612b6b2200ee4c7b8ed502a8"
    response = requests.get(url)
    data = response.json()
    lat = data[0]['lat']
    lon = data[0]['lon']

    # Fetch the weather data for the given latitude and longitude
    url = f"https://api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid=f8ae1807612b6b2200ee4c7b8ed502a8"
    response = requests.get(url)
    data = response.json()

    return data

from flask import Flask, request, jsonify

app = Flask(__name__)

# This is the function that would be called by the front-end to send the user's input to the back-end
def get_user_input_from_front_end():
    location = request.args.get('location')
    return location

# This is the function that would be called by the back-end to send the weather data back to the front-end
def send_data_to_front_end(city, country, temperature, feels_like, humidity, weather_description, wind_speed, wind_deg):
    data = {
        'city': city,
        'country': country,
        'temperature': temperature,
        'feels_like': feels_like,
        'humidity': humidity,
        'weather_description': weather_description,
        'wind_speed': wind_speed,
        'wind_deg': wind_deg
    }
    return jsonify(data)


# Get the user's input from the front-end
location = get_user_input_from_front_end()

# Get the weather data
data = get_weather_data(location)

# Extract the required data and send it back to the front-end
city = data['name']
country = data['sys']['country']
temperature = (data['main']['temp'] - 273.15) * 1.8 + 32
feels_like = (data['main']['feels_like'] - 273.15) * 1.8 + 32
humidity = data['main']['humidity']
weather_description = data['weather'][0]['description']
wind_speed = data['wind']['speed']
wind_deg = data['wind']['deg']

send_data_to_front_end(city, country, temperature, feels_like, humidity, weather_description, wind_speed, wind_deg)
