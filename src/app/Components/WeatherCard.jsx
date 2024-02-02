"use client"
import React, { useEffect, useState } from 'react';
import HourlyForecast from './HourlyForecast';
import { useDispatch, useSelector } from 'react-redux';
import { fetchWeatherInfo } from '../Features/weatherSlice';
import { toast } from "react-toastify";
function WeatherCard(props) {
    const dispatch = useDispatch();
    const weatherStatus = useSelector((state) => state.weather.weatherStatus);
    const WeatherInfo = useSelector((state) => state.weather.weatherInfo);
    const cityInfo = useSelector((state) => state.weather.cityInfo);
    const city = useSelector((state) => state.weather.city);
    const country = useSelector((state) => state.weather.country);
    const currentTempKelvin = useSelector((state) => state.weather.current_temp);
    const feels_likeKElvin = useSelector((state) => state.weather.feels_like);
    const feels_like = feels_likeKElvin? Math.round(feels_likeKElvin - 273.15):"--";
    const currentTemp = currentTempKelvin? Math.round(currentTempKelvin - 273.15):"--";
    const [dayNight, setDayNight] = useState('');
    const isDayTime = (currentTime, sunrise, sunset) => {
        return currentTime >= sunrise && currentTime < sunset;
      };
    
  

    useEffect(() => {
     
        const isDay = isDayTime(cityInfo.timezone, cityInfo.sunrise, cityInfo.sunset);
        setDayNight(isDay ? 'Day' : 'Night');
      
        if(weatherStatus==="")
        { 
          dispatch(fetchWeatherInfo());
        }
        else if(weatherStatus==="failed")
        {
          toast.error("Something went wrong", {
            position: "top-center",
            autoClose: 2000,
            hideProgressBar: true,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            
          });
  
        }
        
   
    }, [dispatch]);
    const formatDateTime=(datetimeString)=> {
        const inputDate = new Date(datetimeString);
        // Get day
        const daysOfWeek = ['Sun', 'Mon', 'Tues', 'Wed', 'Thur', 'Fri', ''];
        const day = daysOfWeek[inputDate.getDay()];
      
        // Get date
        const date = inputDate.toLocaleDateString('en-US', {
          year: 'numeric',
          month: 'short',
          day: 'numeric',
        });
      
        // Get time in 12-hour format with AM/PM
        const hours = inputDate.getHours() % 12 || 12; // Convert 0 to 12
        const minutes = inputDate.getMinutes();
        const ampm = inputDate.getHours() >= 12 ? 'PM' : 'AM';
      
        const time = `${hours}:${minutes < 10 ? '0' : ''}${minutes}`;
      
        return {
          day,
          date,
          ampm,
          time,
        };
      }
    
    return (
        <div>
<div className="w-[35rem] bg-white p-10 rounded-xl ring-8 ring-white ring-opacity-40 overflow-hidden">
    <div className="flex justify-between">
        <div className="flex flex-col">
            <span className="text-6xl font-bold">{currentTemp}°C</span>
            <span className="font-semibold mt-1 text-gray-500">{city},{country}</span>
            <span className="font-semibold mt-3 text-gray-500 relative">Feels Like: <span className='relative top-[0.15rem]  font-bold text-2xl  text-gray-600'> {feels_like}°C</span> </span>
        </div>
        {dayNight==="Day"?<svg className="h-24 w-24 fill-current text-yellow-400" xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M6.76 4.84l-1.8-1.79-1.41 1.41 1.79 1.79zM1 10.5h3v2H1zM11 .55h2V3.5h-2zm8.04 2.495l1.408 1.407-1.79 1.79-1.407-1.408zm-1.8 15.115l1.79 1.8 1.41-1.41-1.8-1.79zM20 10.5h3v2h-3zm-8-5c-3.31 0-6 2.69-6 6s2.69 6 6 6 6-2.69 6-6-2.69-6-6-6zm0 10c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4zm-1 4h2v2.95h-2zm-7.45-.96l1.41 1.41 1.79-1.8-1.41-1.41z"/></svg> :
        <svg className="h-24 w-24 fill-current text-gray-400 " xmlns="http://www.w3.org/2000/svg" enable-background="new 0 0 24 24" height="24" viewBox="0 0 24 24" width="24"><g><rect fill="none" height="24" width="24"/></g><g><g><path d="M19.78,17.51c-2.47,0-6.57-1.33-8.68-5.43C8.77,7.57,10.6,3.6,11.63,2.01C6.27,2.2,1.98,6.59,1.98,12 c0,0.14,0.02,0.28,0.02,0.42C2.61,12.16,3.28,12,3.98,12c0,0,0,0,0,0c0-3.09,1.73-5.77,4.3-7.1C7.78,7.09,7.74,9.94,9.32,13 c1.57,3.04,4.18,4.95,6.8,5.86c-1.23,0.74-2.65,1.15-4.13,1.15c-0.5,0-1-0.05-1.48-0.14c-0.37,0.7-0.94,1.27-1.64,1.64 c0.98,0.32,2.03,0.5,3.11,0.5c3.5,0,6.58-1.8,8.37-4.52C20.18,17.5,19.98,17.51,19.78,17.51z"/><path d="M7,16l-0.18,0C6.4,14.84,5.3,14,4,14c-1.66,0-3,1.34-3,3s1.34,3,3,3c0.62,0,2.49,0,3,0c1.1,0,2-0.9,2-2 C9,16.9,8.1,16,7,16z"/></g></g></svg>}
    </div>
    {/* <h1 className="font-bold text-xl mt-10 mb-3 text-gray-600">Hourly Forecast</h1> */}
    <div className="flex justify-between mt-8 overflow-x-scroll overflow-y-hidden scroll gap-10">    
        {
         WeatherInfo.map((weather, index) => (
 
         <HourlyForecast temp={(weather.main.temp)} time={formatDateTime(weather.dt_txt).time} timeType={formatDateTime(weather.dt_txt).ampm} timestamp={cityInfo.timezone} sunrise={cityInfo.sunrise} sunset={cityInfo.sunset}/>
         ))
    }
        
    </div>
</div>
        </div>
    );
}

export default WeatherCard;