import { useState } from "react"
import axios from 'axios'

function Weather() {
  const [city, setCity] = useState();
  const [weather, setWeather] =useState();

  const handleCityChange=(event)=>{
    setCity(event.target.value)
  }
   const fetchWeather = async () => {
      try{
     const response=await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${'3d6e098fbe7e85d1b70a2c47e429a1c6'}`)
      setWeather(response);
         
  }
      catch(error){
        console.log('ERROR FETCHING WEATHER DATA',error)
      }
    }
  
    const handleClick =()=>{
      fetchWeather();   
     }

  return (
    <div className="weather-container">
      <h1>WEATHER APP</h1>
      <input type="text" placeholder="ENTER CITY NAME" value={city} onChange={handleCityChange}/>
      <button onClick={handleClick}>GET WEATHER</button>
      {weather && (<>
      <div className="weather-info">
       <h4>{weather.data.name}</h4>
       <p>COUNTRY : {weather.data.sys.country}</p>
       <p>TEMPERATURE  : {weather.data.main.temp}</p>
       <p>WEATHER : {weather.data.weather[0].description}</p>
       <p>LON  : {weather.data.coord.lon} & LAT : {weather.data.coord.lat}</p>
       <p></p>
       

      </div> </>)}
    </div>
  )
}

export default Weather
