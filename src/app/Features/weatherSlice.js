import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
const id="4a8eb43813dd4916919f571af51e1e78";
// const city="karachi";
export const fetchWeatherInfo = createAsyncThunk(
  'data/fetchWeatherInfo',
  async (city, { rejectWithValue }) => {
    try {
      console.log(city)
      const response = await axios.get(`https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${id}`);
  console.log(response.data);

//   console.log(response.data.city.country)
//   const list=response.data.list;
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
  city:"",
  country:"",
  current_temp:"",
  feels_like:"",
  search:"",
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
      .addCase(fetchWeatherInfo.fulfilled, (state, action) => {
        
          state.weatherStatus = "success";
          state.city = action.payload.city.name;
          state.country = action.payload.city.country;
          state.currentWeatherInfo = action.payload.list[0]  ;
          state.current_temp = action.payload.list[0].main.temp  ;
          state.feels_like = action.payload.list[0].main.feels_like  ;
          state.weatherInfo = action.payload.list;
          state.cityInfo = action.payload.city;
          console.log("fetch weather :"+state.weatherStatus)
      
      })
      .addCase(fetchWeatherInfo.pending, (state) => {

        state.weatherStatus = "pending";
        console.log("fetch category :"+state.weatherStatus)

      })
      .addCase(fetchWeatherInfo.rejected, (state) => {
        state.weatherStatus = "failed";
        
        console.log("fetch category :"+state.weatherStatus)
      })
  },
  
});

export const {setSearch} = weatherSlice.actions;
export default weatherSlice.reducer;
