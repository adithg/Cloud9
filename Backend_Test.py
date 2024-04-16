# Get the user's input
import requests 
location = input("Enter a location: ")

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

# Fetch the forecast data for the next 5 days
url = f"https://api.openweathermap.org/data/2.5/forecast?lat={lat}&lon={lon}&appid=f8ae1807612b6b2200ee4c7b8ed502a8"
response = requests.get(url)
forecast_data = response.json()

# Print the weather data for the next 5 days
print("5-day forecast:")
for i in range(5):
    print(f"Day {i+1}:")
    print(f"Temperature: {(forecast_data['list'][i]['main']['temp'] - 273.15) * 1.8 + 32:.1f} °F")
    print(f"Humidity: {forecast_data['list'][i]['main']['humidity']}%")
    print(f"Weather: {forecast_data['list'][i]['weather'][0]['description']}")
    print('Wind:', f"{forecast_data['list'][i]['wind']['speed']} m/s at {forecast_data['list'][i]['wind']['deg']}°")
    print()