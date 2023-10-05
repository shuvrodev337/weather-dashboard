import Banner from "../../components/Banner";
import useWeather from "../../hooks/useWeather";

// const api_key = import.meta.env.VITE_API_KEY;

const Homepage = () => {
  const [weatherData] = useWeather()
  console.log(weatherData);
  
  return (
    <div>
      <Banner></Banner>
    </div>
  );
};

export default Homepage;
