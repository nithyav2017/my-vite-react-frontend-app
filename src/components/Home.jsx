import React, { useState } from 'react'
import { Routes } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
 
import RoleBasedRedirect from './RoleBasedRedirect'

const Home = () => {
 
  const [userRole, setUserRole]= useState('admin');
  const location = useLocation();

  return (
     <>
      <div>Home</div>       
      
          <RoleBasedRedirect userRole={userRole}/>   
    
       
     </>
  )
}

export default Home