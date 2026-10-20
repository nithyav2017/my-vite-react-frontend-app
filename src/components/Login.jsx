import React , {useState} from 'react'
import { useNavigate } from 'react-router-dom';


const Login = () => {
    const [isAuthenticated, setAuthenticated]= useState(false);  
    const navigate = useNavigate();

    const handleLogin= (e)=>
  {
    console.log('submit clicked');
    e.preventDefault();


    if(isAuthenticated)
      navigate('/Home');
    else
      navigate('/NotFound');
    
  }
  return (
    <>
    <div>Login</div>
    <form onSubmit={  handleLogin}>
        <input type="text" placeholder='Username'/>
        <input type="text" placeholder="Password"/>
        <button type="submit">Login</button>
      </form>
      </>
  )
}

export default Login