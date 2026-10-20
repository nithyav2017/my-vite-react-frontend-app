import React, { useCallback, useEffect, useMemo, useState } from 'react'
import { QueryClient, QueryClientProvider, useQuery } from "@tanstack/react-query";

const WeatherApp = () => {

    //api key ea449f26fd0d6b4438bf448efc0e2e97

    const [city, setCity]= useState('Lindenhurst');
    const [api_key, setApiKey]= useState('ea449f26fd0d6b4438bf448efc0e2e97')
    const[weather, setWeather]= useState(null);
    const [loading ,setLoading]= useState(false);
    const queryClient = new QueryClient();

    const apiUrl = useMemo(() =>
        city.length > 0 ? `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${api_key}&units=metric`: null, [city]
    )

    const fetchWeather= useCallback(async(retries = 3) => {
        if(!apiUrl) return;

        setLoading(true);

        try{
            const response = await fetch(apiUrl);
            const data = await response.json();
            console.log(data);
            setWeather(data || null);
        }
        catch(err)
        {
            if(retries > 0)
            {
            setTimeout(() => 
                fetchWeather(retries-1)
            , 1000);
            }

            console.log(err.message);
        }
        finally
        {
            setLoading(false);
        }
    },[apiUrl]);
   


    
    useEffect(() =>{         
            fetchWeather()
    }, [fetchWeather])
  return (
    <>
    <div style={{ textAlign:"center", padding:"20px"}}>
        <h1>Waether App</h1>
        <input type="text" value={city} onChange={(e) => setCity(e.target.value)} placeholder='Enter City'/>
        <button onClick={fetchWeather}>Get Weather</button>
        {loading && <p>Loading...</p>}
        {weather && (
            <div>
                <h2>{weather.name}</h2>
                <p>{weather.weather[0].description}</p>
                <p>Temp:{weather.main.temp}C</p>
                <p>Humidity:{weather.main.humidity}%</p>
                <p>Wind Speed: {weather.wind.speed}m/s</p>
            </div> 
        )}
    </div>
    </>
  )
}

export default WeatherApp