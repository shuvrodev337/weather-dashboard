import useWeather from "../hooks/useWeather";

const Temperature = () => {
  const [weatherData] = useWeather();
  console.log(weatherData);

  const imageURL = `http://openweathermap.org/img/wn/${weatherData.weather[0].icon}@2x.png`;
  return (
    <div className="flex justify-between p-4 bg-transparent rounded-lg shadow-lg w-[800px] mx-auto">
      <div>
        <h2 className="text-4xl font-bold mb-2 text-gray-700">
          {weatherData?.name}, {weatherData?.sys?.country}
        </h2>
        <p className="text-lg font-semibold mb-2 text-gray-700">
          
          {weatherData?.weather[0].main}
        </p>
        {/* <p className="text-xl font-bold mb-2 text-gray-700 text-center">{weatherData?.weather[0].main}</p> */}
      </div>
      
        <div className="flex justify-between items-center gap-3">
          <div className="flex items-center">
          <img src={imageURL} alt="weather-icon" className=" ml-auto" />
          <h2 className="text-3xl font-bold mb-2 text-gray-700">
            {weatherData?.main.temp}°C
          </h2>
          </div>
          <div>
          <p className="font-medium text-sm text-gray-700">
            Humidity: {weatherData?.main?.humidity}%
          </p>
          <p className="font-medium text-sm text-gray-700">
            Wind Speed: {weatherData?.wind?.speed} km/h
          </p>
          <p className="font-medium text-sm text-gray-700">
            Description: {weatherData?.weather[0].description}
          </p>
        </div>
        </div>
        
      
    </div>
  );
};

export default Temperature;
