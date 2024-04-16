import requests
import json
from flask import Flask, app, request, jsonify
from geopy.geocoders import Nominatim
from datetime import datetime

# Initialize the Nominatim geocoder
geolocator = Nominatim(user_agent="my_app")

def get_location_coordinates(location):
    try:
        location_obj = geolocator.geocode(location)
        if location_obj is not None:
            lat = location_obj.latitude
            lon = location_obj.longitude
        else:
            print("Error: Unable to geocode location")
            lat = None
            lon = None
    except:
        print("Error: Unable to geocode location")
        lat = None
        lon = None

    return (lat, lon)

def get_current_weather_data(lat, lon):
    # Fetch the weather data for the given latitude and longitude
    url = f"https://api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid=f8ae1807612b6b2200ee4c7b8ed502a8"
    response = requests.get(url)
    data = response.json()
    return data

def format_current_weather_data(data):
    city = data['name']
    country = data['sys']['country']
    temperature = (data['main']['temp'] - 273.15) * 1.8 + 32
    feels_like = (data['main']['feels_like'] - 273.15) * 1.8 + 32
    humidity = data['main']['humidity']
    weather_description = data['weather'][0]['description']
    wind_speed = data['wind']['speed']
    wind_deg = data['wind']['deg']
    sunrise = datetime.fromtimestamp(data['sys']['sunrise']).strftime('%I:%M %p')
    sunset = datetime.fromtimestamp(data['sys']['sunset']).strftime('%I:%M %p')
    pressure = data['main']['pressure']

    response = {
        'city': city,
        'country': country,
        'temperature': temperature,
        'feels_like': feels_like,
        'humidity': humidity,
        'weather_description': weather_description,
        'wind_speed': wind_speed,
        'wind_deg': wind_deg,
        'sunrise': sunrise,
        'sunset': sunset,
        'pressure': pressure
    }
    return response

app = Flask(__name__)

# This is the function that would be called by the front-end to get the location coordinates
@app.route('/get_location_coordinates', methods=['GET'])
def get_location_coordinates_from_front_end():
    location = request.args.get('location')
    (lat, lon) = get_location_coordinates(location)
    response = {
        'latitude': lat,
        'longitude': lon
    }
    return jsonify(response)

# This is the function that would be called by the front-end to get the current weather data
@app.route('/get_current_weather_data', methods=['POST'])
def get_current_weather_data_from_backend():
    data = request.get_json()
    lat = data['latitude']
    lon = data['longitude']
    weather_data = get_current_weather_data(lat, lon)
    weather_response = format_current_weather_data(weather_data)
    return jsonify(weather_response)

# This is the function that would be called by the front-end to get the current weather data with a different parsing of the string input
@app.route('/get_current_weather_data_different_parsing', methods=['POST'])
def get_current_weather_data_from_backend_different_parsing():
    data = request.get_json()
    location = data['location']
    (lat, lon) = get_location_coordinates(location)
    weather_data = get_current_weather_data(lat, lon)
    weather_response = format_current_weather_data(weather_data)
    return jsonify(weather_response)

if __name__ == '__main__':
    app.run(debug=True)