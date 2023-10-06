import React, { useContext } from 'react';
import { CityContext } from '../providers/CityProvider';

const SearchCity = () => {
    const {city,setCity} = useContext(CityContext)

    const handleSearch = (event) => {
        event.preventDefault();
        const searchedCity = event.target.searchedCityName.value
        setCity(searchedCity)
      };
    return (
        <form onSubmit={handleSearch} className="flex items-center gap-2">
      <input
        type="text"
        name='searchedCityName'
        className="border rounded-l-lg py-2 px-4 focus:outline-none"
        placeholder="Search by city..."
      />
      <button
        type="submit"
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-r-lg"
      >
        Search
      </button>
    </form>
    );
};

export default SearchCity;