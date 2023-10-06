import React, { createContext, useState } from 'react';

export const CityContext = createContext()
const CityProvider = ({children}) => {
    const [city, setCity] = useState('amsterdam')
    const cityInfo ={
        city, setCity
    }
    return (
        <CityContext.Provider value={cityInfo}>
            {children}
        </CityContext.Provider>
    );
    
};

export default CityProvider;