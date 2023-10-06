import { useContext } from "react";
import useWeather from "../hooks/useWeather";
import ToggleButton from "./ToggleButton";
import { UnitContext } from "../providers/UnitProvider";

const Temperature = () => {
  const [weatherData ] = useWeather();
  const  {unit} = useContext(UnitContext)
  
// console.log(weatherData);
  const imageURL =`http://openweathermap.org/img/wn/${weatherData?.weather[0].icon}@2x.png`;
  // console.log(imageURL);
  return (
    <div className="flex justify-between p-4 bg-transparent rounded-lg shadow-lg w-[900px] mx-auto">
      <div>
        <h2 className="text-4xl font-bold mb-2 text-gray-700">
          {weatherData?.name}, {weatherData?.sys?.country}
        </h2>
        <p className="text-lg font-semibold mb-2 text-gray-700">
          
          {weatherData?.weather[0].main}
        </p>
      </div>
      
        <div className="flex justify-between items-center gap-6">
          <div className="flex items-center">
          <div>
          <img src={imageURL} alt="weather-icon" className=" ml-auto" />
          
          </div>
          <div className="space-y-2">
          <ToggleButton></ToggleButton>
          <h2 className="text-3xl font-semibold mb-2 text-gray-700">
            {weatherData?.main.temp.toFixed(0)}<sup>{unit === 'metric'?'°C':'°F'}</sup>
          </h2>
          </div>
          </div>
          <div>
          <p className="font-medium text-sm text-gray-700">
            Humidity: {weatherData?.main?.humidity}%
          </p>
          <p className="font-medium text-sm text-gray-700">
            Wind Speed: {weatherData?.wind?.speed} {unit === 'metric' ?'mph':'kmh'}
          </p>
          <p className="font-medium text-sm text-gray-700">
            Description: {weatherData?.weather[0].description}
          </p>
          {/* <ToggleButton></ToggleButton> */}
        </div>
        </div>
        
      
    </div>
  );
};

export default Temperature;
