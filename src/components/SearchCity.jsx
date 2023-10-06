import  { useContext } from 'react';
import { CityContext } from '../providers/CityProvider';


const SearchCity = () => {
    const {setCity} = useContext(CityContext)

    const handleSearch = (event) => {
        event.preventDefault();
        const searchedCity = event.target.searchedCityName.value
        setCity(searchedCity)
        event.target.reset();
        
      };
    return (
        <form onSubmit={handleSearch} className="flex flex-col md:flex-row items-center gap-4">
      <input
        type="text"
        name='searchedCityName'
        className="border rounded-lg py-2 px-4 focus:outline-none"
        placeholder="Enter city name..."
      />
      <button
        type="submit"
        className="bg-blue-500 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-lg mt-2 md:mt-0"
      >
        Search
      </button>
    </form>
    );
};

export default SearchCity;