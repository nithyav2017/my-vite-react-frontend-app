import React, { useCallback, useEffect, useMemo, useState } from 'react'

const TrafficLightAutomation = () => {

 const [data,setData]= useState();
 const[loading, setLoading] = useState(false);
 const [error, setError]= useState(false);

  const apiUrl= useMemo(() => '', [query])
  const fetchApi = useCallback(async ()=>{
    const response = await fectch(url)
    const data = await response.json();
    setData(data);
  })
  useEffect(()=> {
    setLoading(true);
    try
    {
       const timer = setTimeout(() => {
         fetchApi();
       }, 10000);  
    }
    catch(err)
    {
        setError(true);
        console.log(err.message);
    }
    finally
    {
        return () => clearTimeout(timer);
        setLoading(false);
    }

    },[]);
  
  return (
    <div>TrafficLightAutomation</div>
  )
}

export default TrafficLightAutomation