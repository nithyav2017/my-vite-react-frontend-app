import React from 'react'
import { Outlet,Link } from 'react-router-dom'

const Layout = () => {

    //navigate("", {state:{}})
  return (
    <>
    <div>Dashboard</div>
    <Link to="AdminDashboard"   >Admin</Link>
    <Link to="UserDashboard">User</Link>
     
    <Outlet/>
    </>

  )
}

export default Layout