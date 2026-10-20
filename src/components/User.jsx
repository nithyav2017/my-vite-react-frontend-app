import React , {useState, useEffect} from 'react'
import {produce} from 'immer'
import {z} from 'zod'

const User = () => {
const[count, setCount]= useState(0);
const API_BASE =  import.meta.env.VITE_API_URL;

const [user, setUser] = useState({
    firstName: "Nicholad",
    lastName: "Jammy",
    age: 44,
    address:{
        street: "123 Main St",
        city: "New York",
        country:"USA", 
        zipcode: 60085
    }
});
useEffect(() =>{
     fetch(`${API_BASE}/api/users`,{
        method: 'POST',
        headers: {'Content-Type':'application/json'},
        body : JSON.stringify(user)
        
     })
     .then(res=>res.json())
     .then(data => console.log("Response:", data));
},[]);
/*

const userSchema=   z.object({
    name: z.string(),
    age: z.number(),
    address: z.object({
        street: z.string(),
        city: z.string(),
        country : z.string(),
        zipcode: z.number()
    }).refine(data => data.zipcode > 0 ,{ message: "Invalid Zipcode"})
})


    const result = userSchema.safeParse(user);
    if (!result.success) {
    return <p>Invalid user data</p>;
  }
  
//convert json string to json object

const updateJson = () => {
    const parsedData = JSON.parse(user);

     const updatedData = {
        ...parsedData,
        name: "Nithya Jayaganesh"
     }; // assigning object to updatedData.
     setUser(JSON.stringify(updatedData));
}
 //here use immer produce instrad of ...prevState(spreadOperator) to retain state
const updateAddress = () =>  
    setUser(prevState => //   implicit   return 
        produce(prevState, draft => { //function body
        draft.address.city= "Chicago"
    }));
 
useEffect(() => {
    const interval = setInterval(() =>{
        setCount(prev => prev + 1);
    },1000)
    return () => clearInterval(interval);
},[]);

*/

  /* return (
    <>
      <h2>{user.name}</h2>
      <p>Age: {user.age}</p>
      <p>Address: {user.address.street}, {user.address.city}, {user.address.country}</p>
      /* to display json string */
     /*  <pre>{JSON.stringify(user,null, 2)}</pre>
      <p> Auto Incrementing Counter: {count}</p>
      <div>
         <button onClick={updateAddress}>Update Address</button>
          <button onClick={updateJson}>Update Json</button>
      </div>
    </>
    
  )   */
}

export default User