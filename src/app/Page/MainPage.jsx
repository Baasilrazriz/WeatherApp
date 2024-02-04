import WeatherCard from '../Components/WeatherCard'; 
import Header from '../Components/Header';
import { useEffect, useState } from 'react';
import Highlights from '../Components/Highlights';
import HighlightSection from '../Components/HighlightSection';
import { useSelector } from 'react-redux';

function MainPage(props) {
    const last_updated = useSelector((state) => state.weather.last_updated);
    const localtime = useSelector((state) => state.weather.localtime);
    return (

        <>
                <div className='text-gray-700  bg-gradient-to-br from-pink-200 via-purple-200 to-indigo-200 h-screen w-screen'>
                <Header/>   
                
                <div className="  pt-32 ">  
                <h1 className="font-semibold mt-1 text-2xl text-gray-500 text-center pb-12">local time: <span className='text-red-500'>{localtime}</span></h1>
                 <div className='flex justify-center items-center      gap-10'>
                 <WeatherCard />
<HighlightSection/>
                 </div>
                 <h1 className="pt-12  font-semibold text-2xl mt-1 text-gray-500 text-center w-full">last updated: <span className='text-red-500'>{last_updated}</span></h1>
                 <h1 className="  font-semibold text-base mt-1 text-gray-500 text-center w-full">Created By: <span className='text-green-500'>Muhammmad Basil Irfan</span></h1>
                 
                </div>
            
                    </div>    
                    
        </>
       
    );
}

export default MainPage;
