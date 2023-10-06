import React from 'react';
import SearchCity from './SearchCity';

const Banner = () => {
    return (
        <div className='container mx-auto  my-16 flex flex-col md:flex-row justify-between items-center space-y-5'>
  <h1 className='text-left text-4xl md:text-6xl font-extrabold text-white'>Weather Dashboard</h1>
  <SearchCity></SearchCity>
            
        </div>
    );
};

export default Banner;