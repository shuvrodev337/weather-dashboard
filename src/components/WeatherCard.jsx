import { useContext } from "react";
import useWeather from "../hooks/useWeather";
import ToggleButton from "./ToggleButton";
import { UnitContext } from "../providers/UnitProvider";

const WeatherCard = () => {
  const [weatherData ] = useWeather();
  const  {unit} = useContext(UnitContext)
  
  const imageURL =`http://openweathermap.org/img/wn/${weatherData?.weather[0].icon}@2x.png`;
  return (
    <div className="flex flex-col md:flex-row justify-between p-4 md:p-10 bg-black rounded-3xl shadow-lg w-[330px] md:w-[900px] mx-auto">
      <div>
        <h2 className="text-4xl font-bold mb-2 text-white">
          {weatherData?.name}, {weatherData?.sys?.country}
        </h2>
        <p className="text-lg font-semibold mb-2 text-white">
          
          {weatherData?.weather[0].main}
        </p>
      </div>
      
        <div className="flex justify-between items-center gap-3 md:gap-6">
          <div className="flex items-center">
          <div>
          <img src={imageURL} alt="weather-icon" className=" ml-auto" />
          
          </div>
          <div className="space-y-2">
          <ToggleButton></ToggleButton>
          <h2 className="text-3xl font-semibold mb-2 text-white">
            {weatherData?.main.temp.toFixed(0)}<sup>{unit === 'metric'?'°C':'°F'}</sup>
          </h2>
          </div>
          </div>
          <div>
          <p className=" text-sm text-white">
            Humidity: {weatherData?.main?.humidity}%
          </p>
          <p className=" text-sm text-white">
            Wind Speed: {weatherData?.wind?.speed} {unit === 'metric' ?'mph':'kmh'}
          </p>
          <p className=" text-sm text-white">
            Description: {weatherData?.weather[0].description}
          </p>
        </div>
        </div>
        
      
    </div>
  );
};

export default WeatherCard;
