import React from 'react';
import Highlights from './Highlights';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCurrentWeatherInfo } from '../Features/weatherSlice';


function HighlightSection(props) {
   const dispatch=useDispatch();
    
    const search = useSelector((state) => state.weather.search);    
    const weatherData = useSelector((state) => state.weather.currentWeatherInfo);
    const wind_mph = useSelector((state) => state.weather.wind_mph);
    const wind_dir = useSelector((state) => state.weather.wind_dir);
    const humidity = useSelector((state) => state.weather.humidity);
    const vis_miles = useSelector((state) => state.weather.vis_miles);
    const  pressure_mb= useSelector((state) => state.weather.pressure_mb);
    const  currentWeatherStatus= useSelector((state) => state.weather.currentWeatherStatus);
    useEffect(() => {
        if(currentWeatherStatus!=="pending")
    { 
        dispatch(fetchCurrentWeatherInfo(search))
        
    }
    }, [search]);
  
    return (
        <div>
<div className="sm:w-[35rem] w-[21rem] h-96 sm:h-[25rem] bg-white px-10 py-4 rounded-xl ring-8 ring-white ring-opacity-40 overflow-hidden">

<h1 className="text-slate-600 font-extrabold pb-4 text-nowrap text-3xl col-span-2">
  Today's Highlights
</h1>
<div className='grid grid-cols-2 gap-5'>
{weatherData && (
  <>
    <Highlights
      stats={{
        title: "Wind Status",
        value: wind_mph,
        unit: "mph",
        direction: wind_dir ,
      }}
    />
    <Highlights
      stats={{
        title: "Humidity",
        value: humidity,
        unit: "%",
      }}
    />
    <Highlights
      stats={{
        title: "Visibility",
        value: vis_miles,
        unit: "miles",
      }}
    />
    <Highlights
      stats={{
        title: "Air Pressure",
        value: pressure_mb,
        unit: "mb",
      }}
    />
  </>
)}
</div>
</div>
        </div>
    );
}

export default HighlightSection;