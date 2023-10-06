import React from 'react';
import SearchCity from './SearchCity';

const Banner = () => {
    return (
        <div className='container mx-auto  my-16 flex justify-between items-center'>
  <h1 className='text-left text-5xl font-extrabold text-white'>Weather Dashboard</h1>
  <SearchCity></SearchCity>
            
        </div>
    );
};

export default Banner;