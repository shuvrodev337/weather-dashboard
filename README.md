# Project: Weather Dashboard

# About my project

* This is a simple weather application using ReactJS and TailwindCSS.
* I have used a RESTful API (OpenWeatherMap) to fetch weather data.
* Users can search by the name of a city and then see the weather information for that city.
* The weather information includes temperature, weather description, humidity, wind speed, and an icon representing the weather.
* Error alert if the city is not found or if there is an issue with the API request.
* Toggle between Celsius and Fahrenheit for temperature display.
* Used env variables to manage api keys and sensitive data.

# Code Organization
*  The App component contains the Homepage component. 
*  The Homepage component showcase the entire home page of the application. It contains the Banner and the WeatherCard component. 
*  In the Banner component, at the top, users can see the website name and SearchCity component.
*  An in the WeatherCard component, users can see the weather information for that city.

* I have chosen contextAPI to manage states in my application. One is CityContex and the other is UnitContext. 
* Using the CityContext and  UnitContext, I get the 'city' and 'unit' states in the custom hook called useWeather.
* In the useWeather hook, I fetch weather information for that city in required unit.
* The 'city' state can be changed in the SearchCity component.
* The 'unit' state can be toggled in the ToggleButton component.

# To run the application on local setup, clone the repo and then run this below command- 
  1. npm install
  2. npm run dev

## Live Link
Hosted in Firebase -> [Weather DashBoard](https://weather-dashboard-29e9d.web.app/)
