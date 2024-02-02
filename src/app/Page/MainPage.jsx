import WeatherCard from '../Components/WeatherCard'; 
import Forecast from '../Components/Forecast';
import { ToastContainer } from 'react-toastify'

function MainPage(props) {
    return (
        <>
        <ToastContainer style={{ zIndex: 9999 }} />
                    <div className="flex gap-10 w-screen h-screen text-gray-700 p-10 bg-gradient-to-br from-pink-200 via-purple-200 to-indigo-200 ">
                     <WeatherCard />
                     <Forecast/>
                    </div>
        </>
       
    );
}

export default MainPage;
