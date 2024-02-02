import React from 'react';
import ForecastCard from './ForecastCard';

function Forecast(props) {
    return (
        <div>
            <div className="flex flex-col space-y-6 w-[35rem]  bg-white p-10  rounded-xl ring-8 ring-white ring-opacity-40">
    <ForecastCard date="Fri,22" rain="12%" temp_min="19" temp_max="25"/>
    <ForecastCard date="Fri,22" rain="12%" temp_min="19" temp_max="25"/>
    <ForecastCard date="Fri,22" rain="12%" temp_min="19" temp_max="25"/>
    <ForecastCard date="Fri,22" rain="12%" temp_min="19" temp_max="25"/>
    <ForecastCard date="Fri,22" rain="12%" temp_min="19" temp_max="25"/>
    <ForecastCard date="Fri,22" rain="12%" temp_min="19" temp_max="25"/>
    {/* cloud */}
    {/* <div className="flex justify-between items-center">
        <span className="font-semibold text-lg w-1/4">Mon, 25 Jan</span>
        <div className="flex items-center justify-end pr-10 w-1/4">
            <span className="font-semibold">50%</span>
            <svg className="w-6 h-6 fill-current ml-1" viewBox="0 0 16 20" version="1.1" xmlns="http://www.w3.org/2000/svg" >
                <g transform="matrix(1,0,0,1,-4,-2)">
                    <path d="M17.66,8L12.71,3.06C12.32,2.67 11.69,2.67 11.3,3.06L6.34,8C4.78,9.56 4,11.64 4,13.64C4,15.64 4.78,17.75 6.34,19.31C7.9,20.87 9.95,21.66 12,21.66C14.05,21.66 16.1,20.87 17.66,19.31C19.22,17.75 20,15.64 20,13.64C20,11.64 19.22,9.56 17.66,8ZM6,14C6.01,12 6.62,10.73 7.76,9.6L12,5.27L16.24,9.65C17.38,10.77 17.99,12 18,14C18.016,17.296 14.96,19.809 12,19.74C9.069,19.672 5.982,17.655 6,14Z" />
                </g>
            </svg>
        </div>
        <svg className="h-8 w-8 fill-current " xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M12.01 6c2.61 0 4.89 1.86 5.4 4.43l.3 1.5 1.52.11c1.56.11 2.78 1.41 2.78 2.96 0 1.65-1.35 3-3 3h-13c-2.21 0-4-1.79-4-4 0-2.05 1.53-3.76 3.56-3.97l1.07-.11.5-.95C8.08 7.14 9.95 6 12.01 6m0-2C9.12 4 6.6 5.64 5.35 8.04 2.35 8.36.01 10.91.01 14c0 3.31 2.69 6 6 6h13c2.76 0 5-2.24 5-5 0-2.64-2.05-4.78-4.64-4.96C18.68 6.59 15.65 4 12.01 4z"/></svg>
        <span className="font-semibold text-lg w-1/4 text-right">18° / 29°</span>
    </div> */}
 
    
</div>
        </div>
    );
}

export default Forecast;