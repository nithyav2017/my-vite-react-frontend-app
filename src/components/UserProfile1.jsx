import React, { useContext, useState } from 'react'
import UserContext from './Context/UserProvider'

const UserProfile = () => {
    const {user, updateUser} = useContext(UserContext)
    const [newName, setName]= useState('');
    const[newAge, setAge]= useState();

    const handleUpdates = ()=>
    {
        updateUser({name: newName || user.name, age:newAge});
    }

  return (
    <>
    <div>UserProfile</div>

    <p>Name:{user.name}</p>
    <p>Age: {user.age}</p>

    <input type="text" placeholder='New Name' value = {newName} onChange={(e) => setName(e.target.value)}/>
    <input type="number" placeholder='New Age' value = {newAge} onChange={(e) => setAge(e.target.value)}/>
    <button onClick = {handleUpdates}> Update User</button>
    </>
  )
}

export default UserProfile