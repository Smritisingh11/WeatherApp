import SearchBox from"./SearchBox.jsx";
import InfoBox from"./InfoBox.jsx";
import {useState} from "react";

export default function WeatherApp(){
    const[weatherInfo,setWeatherInfo]=useState({ 
    city: "Delhi",
    feelsLike: 41.3,
    humidity : 8,
    temp: 44.98,
    tempMax :  44.98,
    tempMin: 44.98,
    weather: "overcast clouds",
}
);
let updateInfo=(newInfo)=>{
setWeatherInfo(newInfo);
}

    return(
        <div style={{textAlign:"center"}}>
         <h1>WeatherApp</h1>
            <SearchBox updateInfo={updateInfo}/>
            <InfoBox Info={weatherInfo}/>
            </div>
    );
}