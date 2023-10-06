import  { createContext, useState } from 'react';

export const UnitContext = createContext()
const UnitProvider = ({children}) => {
const  [unit,setUnit] = useState('metric')
const unitInfo = {
    unit,setUnit
}
    return (
        <UnitContext.Provider value={unitInfo}>
            {children}
        </UnitContext.Provider>
    );
};

export default UnitProvider;