import { useContext, useEffect, useState } from 'react';
import { CityContext } from '../providers/CityProvider';
import toast from 'react-hot-toast';
import { UnitContext } from '../providers/UnitProvider';

const api_key = import.meta.env.VITE_API_KEY;

const useWeather = () => {
    const {city} = useContext(CityContext)
    const  {unit} = useContext(UnitContext)

    
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${api_key}&units=${unit}`;

const [weatherData,setWeatherData] = useState() 
useEffect(()=>{
    fetch(url)
        .then(res => res.json())
        .then(data => {
             console.log(data);
             if (data.cod === "404") {
                toast.error(data.message)
                return
             }
            setWeatherData(data)
        });
},[url])

return [weatherData] 
};

export default useWeather;
