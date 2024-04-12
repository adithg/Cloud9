import requests
import json
from flask import Flask, request, jsonify

def get_location_coordinates(location):
    # Geocode the location to get the latitude and longitude
    url = f"http://api.openweathermap.org/geo/1.0/direct?q={location}&appid=f8ae1807612b6b2200ee4c7b8ed502a8"
    response = requests.get(url)
    data = response.json()
    lat = data[0]['lat']
    lon = data[0]['lon']
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

    response = {
        'city': city,
        'country': country,
        'temperature': temperature,
        'feels_like': feels_like,
        'humidity': humidity,
        'weather_description': weather_description,
        'wind_speed': wind_speed,
        'wind_deg': wind_deg
    }
    return response

app = Flask(__name__)

# This is the function that would be called by the front-end to get the location coordinates
@app.route('/get_location_coordinates', methods=['GET'])
def get_location_coordinates_from_front_end():
    location = request.args.get('location')
    (lat, lon) = get_location_coordinates(location)
    response = {
        'lat': lat,
        'lon': lon
    }
    return jsonify(response)

# This is the function that would be called by the front-end to get the current weather data
@app.route('/get_current_weather_data', methods=['POST'])
def get_current_weather_data_from_backend():
    data = request.get_json()
    lat = data['lat']
    lon = data['lon']
    weather_data = get_current_weather_data(lat, lon)
    weather_response = format_current_weather_data(weather_data)
    return jsonify(weather_response)

if __name__ == '__main__':
    app.run(debug=True)
