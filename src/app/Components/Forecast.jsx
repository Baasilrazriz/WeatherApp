import React, { useEffect } from 'react';
import ForecastCard from './ForecastCard';
import { useDispatch, useSelector } from 'react-redux';

function Forecast(props) {
    const dispatch = useDispatch();

    const WeatherInfo = useSelector((state) => state.weather.weatherInfo);
    const currentWeatherInfo = useSelector((state) => state.weather.currentWeatherInfo);
    
    
    const country = useSelector((state) => state.weather.country);
    const currentTempKelvin = useSelector((state) => state.weather.current_temp);
    const feels_likeKElvin = useSelector((state) => state.weather.feels_like);
    const feels_like = feels_likeKElvin? Math.round(feels_likeKElvin - 273.15):"--";
    const currentTemp = currentTempKelvin? Math.round(currentTempKelvin - 273.15):"--";
    
        const formatDateTime=(datetimeString)=> {
            const inputDate = new Date(datetimeString);
            // Get day
            const daysOfWeek = ['Sun', 'Mon', 'Tues', 'Wed', 'Thur', 'Fri', ''];
            const day = daysOfWeek[inputDate.getDay()];
          
            // Get date
            const date = inputDate.toLocaleDateString('en-US', {
              
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
            <div className="flex flex-col space-y-6 w-[35rem]  bg-white p-10  rounded-xl ring-8 ring-white ring-opacity-40">
    <ForecastCard date={(formatDateTime(currentWeatherInfo.dt_txt).day?formatDateTime(currentWeatherInfo.dt_txt).day:"---")+","+(formatDateTime(currentWeatherInfo.dt_txt).date?formatDateTime(currentWeatherInfo.dt_txt).date:"--")} rain="12%" temp_min="19" temp_max="25"/>
 
    
</div>
        </div>
    );
}

export default Forecast;