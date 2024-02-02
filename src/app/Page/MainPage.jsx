import WeatherCard from '../Components/WeatherCard'; 
import Forecast from '../Components/Forecast';
import { ToastContainer } from 'react-toastify'
import Header from '../Components/Header';

function MainPage(props) {
    return (
        <>
                <Header/>   
                    <div className="flex justify-center items-center      gap-10 w-screen h-screen text-gray-700 p-10 bg-gradient-to-br from-pink-200 via-purple-200 to-indigo-200 ">
                     <WeatherCard />
                     <Forecast/>
                    </div>
                    
                    
        </>
       
    );
}

export default MainPage;
