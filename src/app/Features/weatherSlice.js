import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
export const fetchCurrentWeatherInfo = createAsyncThunk(
  'v1/fetchWeatherInfo',
  async (city, { rejectWithValue }) => {
    try {
      
      const response = await axios.get(`https://api.weatherapi.com/v1/forecast.json?key=839006d372c74c52890191811240302&q=${city}&days=10&aqi=no&alerts=yes`);

  return response.data
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);
  
const initialState={
 cityInfo:[],
  weatherInfo:[ ],
  currentWeatherInfo:[ ],
  weatherStatus:"",
  currentWeatherStatus:"",
  city:"",
  country:"",
  temp_c:"",
  temp_f:"",
  feels_like_c:"",
  feels_like_f:"",
  is_day:"",
  last_updated:"",
  search:"karachi",
  wind_mph:"",
  wind_dir:"",
  pressure_mb:"",
  humidity:"",
  vis_miles:"",
}
const weatherSlice = createSlice({
  name: 'weather',
  initialState,
  reducers: {
    setSearch:(state,action)=>{
      state.search=action.payload;
    },

    
  },
    
  extraReducers: (builder) => {
    builder
      
      .addCase(fetchCurrentWeatherInfo.fulfilled, (state, action) => {
          state.currentWeatherStatus = "success";
          state.currentWeatherInfo=action.payload
          state.weatherInfo = action.payload.forecast.forecastday[0].hour;
          state.wind_mph=action.payload.current.wind_mph
          state.wind_dir=action.payload.current.wind_dir
          state.humidity=action.payload.current.humidity        
          state.vis_miles=action.payload.current.vis_miles        
          state.pressure_mb=action.payload.current.pressure_mb        
          state.temp_c=action.payload.current.temp_c
          state.temp_f=action.payload.current.temp_f
          state.feels_like_c=action.payload.current.feelslike_c
          state.feels_like_f=action.payload.current.feelslike_f
          state.is_day=action.payload.current.is_day
          state.last_updated=action.payload.current.last_updated
          state.city = action.payload.location.name;
          state.country = action.payload.location.country;
          state.localtime = action.payload.location.localtime;
          
      })
      .addCase(fetchCurrentWeatherInfo.pending, (state) => {

        state.currentWeatherStatus = "pending";
        

      })
      .addCase(fetchCurrentWeatherInfo.rejected, (state) => {
        state.currentWeatherStatus = "failed";
        
        
      })
  },
  
});

export const {setSearch} = weatherSlice.actions;
export default weatherSlice.reducer;
