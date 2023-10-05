import { useEffect, useState } from 'react';
const api_key = import.meta.env.VITE_API_KEY;

const useWeather = () => {
    const city = 'Dhaka';
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${api_key}&units=metric`;

const [weatherData,setWeatherData] = useState([])
useEffect(()=>{
    fetch(url)
        .then(res => res.json())
        .then(data => setWeatherData(data));
},[url])

return [weatherData]
};

export default useWeather;
