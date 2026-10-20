import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom';

const RoleBasedRedirect = ({userRole}) => {
const navigate = useNavigate();
  useEffect(() =>{
    if(userRole === "admin")
        navigate('/Dashboards/AdminDashboard')
    else if (userRole === "User")
        navigate('/Dashboard/UserDashboard')
  },[userRole,navigate]);
  return (
    <div>RoleBasedRedirect</div>
  )
}

export default RoleBasedRedirect