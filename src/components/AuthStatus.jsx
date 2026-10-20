import React, { useEffect } from 'react'
import { useAuth } from './Context/AuthProvider'

export const AuthStatus = () => {
    const {isLoggedIn, login,logout} = useAuth();

    useEffect(() =>{
        document.title = isLoggedIn? 'Welcome' : 'Please log in';
    },[isLoggedIn])

  return (
   <>
    <div>
        <h3>Status: {isLoggedIn ? "Logged In" : "Logged Out"}</h3>
        <button onClick={login}>Login</button>
        <button onClick={logout}>Logout</button>
    </div>
   </>
  )
}
