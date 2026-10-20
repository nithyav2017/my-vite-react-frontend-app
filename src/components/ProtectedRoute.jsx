import React from 'react'
import { useNavigate } from 'react-router-dom'

const ProtectedRoute = ({isAuthenticated, children}) => {

const navigate = useNavigate();

if(!isAuthenticated)
{
    navigate('/Home');
}
  return children;
}

export default ProtectedRoute