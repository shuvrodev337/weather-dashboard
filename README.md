# Project: Weather Dashboard

# About my project

* This is a simple weather application using ReactJS and TailwindCSS.
* I have used a RESTful API (OpenWeatherMap) to fetch weather data.
* Users can search by the name of a city and then see the weather information for that city.
* The weather information includes temperature, weather description, humidity, wind speed, and an icon representing the weather.
* Error alert if the city is not found or if there is an issue with the API request.
* Toggle between Celsius and Fahrenheit for temperature display.

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




## Live Link
Hosted in  -> [Weather DashBoard]()