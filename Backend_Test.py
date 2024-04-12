# import requests
# import json

# # Get the user's input
# location = input("Enter a location: ")

# # Geocode the location to get the latitude and longitude
# url = f"http://api.openweathermap.org/geo/1.0/direct?q={location}&appid=f8ae1807612b6b2200ee4c7b8ed502a8"
# response = requests.get(url)
# data = response.json()
# lat = data[0]['lat']
# lon = data[0]['lon']

# # Fetch the weather data for the given latitude and longitude
# url = f"https://api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid=f8ae1807612b6b2200ee4c7b8ed502a8"
# response = requests.get(url)
# data = response.json()

# print(f"City: {data['name']}")
# print(f"Country: {data['sys']['country']}")
# print(f"Temperature: {(data['main']['temp'] - 273.15) * 1.8 + 32:.1f} °F")
# print(f"Temperature: {(data['main']['feels_like'] - 273.15) * 1.8 + 32:.1f} °F")
# print(f"Humidity: {data['main']['humidity']}%")
# print(f"Weather: {data['weather'][0]['description']}")
# print('Wind:', f"{data['wind']['speed']} m/s at {data['wind']['deg']}°")
