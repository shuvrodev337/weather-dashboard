import  { useContext } from 'react';
import { UnitContext } from '../providers/UnitProvider';

const ToggleButton = () => {
const  {unit,setUnit} = useContext(UnitContext)

console.log(unit);
  return (
    <div className="flex items-center">
    <button
      className={`${
        unit === 'metric' ? 'bg-blue-500' : 'bg-gray-300'
      } text-white font-medium py-0 px-2 rounded-l-lg`}
      onClick={()=>setUnit('metric')}
    >
      °C
    </button>
    <button
      className={`${
        unit === 'imperial' ? 'bg-blue-500' : 'bg-gray-300'
      } text-white font-medium py-0 px-2 rounded-r-lg`}
      onClick={()=>setUnit('imperial')}
    >
      °F
    </button>
  </div>
  );
};

export default ToggleButton;
