 import React, { useEffect, useMemo, useState } from 'react'
 
const DashboardChild = ({items, onUpdate}) =>{
    const [item, setItems] = useState([items]);
   
    
    useEffect(() => {
        const timer = setInterval(async() => {
            const response = await fetch('url');
            const data = await response.data();

            setItems((prev) => 
            { const changed = prev != data
            return changed ? data : prev}
            )
        }, 10000);

    },[])
     
  


return(
    <>
        {items.map((item) =>
            <ul>
                <li key ={item.id}>{item.name}</li>
            </ul>
        )}
        <button type='submit' onClick={onUpdate}>Update</button>
    </>
)}
