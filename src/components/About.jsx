import React, { useEffect } from 'react'
import { useNavigate,useLocation, Link, Outlet } from 'react-router-dom';
 

const About = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const nameInput = React.createRef();

  useEffect(() =>
  { console.log(nameInput)},[])

  useEffect(() => {
    console.log(nameInput.current.value);
  },[nameInput]);

  useEffect(() =>{
    const timer =setTimeout(() => {
      navigate('/Home' )
       
    }, 2000);

    return() => clearTimeout(timer);

  },[]);

  const handleChange = (e) =>{     
    console.log(nameInput.current.value);
  }

  const handleClick = (e) => {
    navigate("/Home");
  }

  return (
    <>
      <div>About</div>
      <nav>
        <Link to="Products">Products</Link>        
      </nav>
      <input ref={nameInput}/>
      <button type = "submit" onClick={(e) =>{ handleChange(e);handleClick(e); }}>Submit</button>
      <Outlet/>
    </>
  )
}

export default About