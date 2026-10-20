import { useState ,useContext, Profiler} from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'
import Products from './components/Products'
import Userprofile from './components/User'
import Form from './components/FormData'
import LazyLoadcomp from './components/lazyLoadcomp'
import withLoader from './HOC/withLoader' 
import {Routes, Route, Link, BrowserRouter, Router} from "react-router-dom"
import Home from './components/Home'
import About from './components/About'
import NotFound from './components/NotFound'
import ProtectedRoute from './components/ProtectedRoute'
import { useRef } from 'react'
import Header from './components/Header'
import FormContainer from './components/FormContainer'
import ModalProvider from './components/Context/ModalProvider'
import Modal from './components/Context/Modal'
import ModalButton from './components/Context/ModalButton'
import Child from './components/Child'
import DataFetcher from './components/RenderProps/DataFetcher'
 
import Count from './components/Count'
import Like from './components/Like'
import ProductLists from './components/ProductLists'
import UserList from './components/CodingQuestions/UserList'
import ErrorBoundary from './components/ErrorBoundary'
import DynamicContextInject from './components/DynamicContextInject'
import DynamicReceivingComp from './components/DynamicReceivingComp'
import Card from './components/Card'
import ToDoList from './components/ToDoList'
import { flushSync } from 'react-dom'
import AutoCompleting from './components/CodingQuestions/AutoCompleting'
import WeatherApp from './components/CodingQuestions/WeatherApp'
import UserProvider from './components/Context/UserProvider'
import UserInfo from './components/UserProfile'
import ProductDetails from './components/ProductDetails'
import User from './components/User'
 
 
//import Login from './components/Login'
let renderCount = 0;

function onRender(id, phase, actualDuration) {
  renderCount++;
    console.log("Profiler callback fired:", {
    id,
    phase,
    actualDuration,renderCount

  });
} 
 

function App() {
 
  const [userRole, setUserRole]= useState('admin');
  const linkRef= useRef(null);
  const [theme, setTheme] = useState('light');
  const [count, setCount]= useState(1);
  const [isAdmin, setAdmin] = useState(true);
  const [amount, setAmount]= useState(1000.3456);

 

  const child2Ref = useRef(null);

  const toggleTheme = () =>{
    setTheme(prevState => prevState === 'light' ? 'dark' : 'light');
  }

  const handleClick = () => {
    console.log("Link Click");
    linkRef.current.click();
  }

  const resetChildern = () => {
    if(child2Ref.current){
      child2Ref.current.reset();
    }
  }


  const incCount = () =>{
    setTimeout(() => {
      setCount(count+1);
      setCount(prev => prev+1);
      console.log("After setCount", count);
    },1000)
  }

   
  // <a href="/about"> // causes full browser reload the entire page, loses client navigation
  // const EnhancedUserList = withLoader(UserLists);
   return (
    <>
     <div className="App">
      <User/>
      <BrowserRouter>
       <nav>
        <Link to="/product/101">Product 101</Link>
        <Link to ="/product/102">Product 102</Link>
      </nav>     
        <Routes>
            <Route path="/product/:id"  element={<ProductDetails/>}/>
        </Routes>
     </BrowserRouter>
      <Profiler id="UserInfo" onRender={onRender}></Profiler>
      <UserProvider>
        <UserInfo isAdmin={true} />
      </UserProvider>
      <Profiler/>
   {/*    <WeatherApp/>
     <AutoCompleting/>
      <DynamicContextInject Component={DynamicReceivingComp} 
                componentProps={{title: "Example", name:"Nithya"}}/>

        

      <button onClick={incCount}>Inc</button> 
      <Like/>

      <ErrorBoundary>
       <UserList/>
     </ErrorBoundary> */} 

      {/* <ProductLists/> */}
    {/* <EnhancedUserList isLoading={false} users={["Nithya", "Alice", "Bob"]} /> */}
   
      {/* <p>DataFetcher</p> */}
    {/* <DataFetcher render={(data) => (
      <ul>
        {data.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    )}/> */}

     {/* <p>Count Redux :</p> <Count/>    
    
      <Child ref={child2Ref} name="Child 2" />
      <button onClick= {resetChildern}>Reset</button>

      <div className={theme}>
        <button onClick={toggleTheme}>Toggle Theme</button>
        <Header theme={theme} />  uyjnhml bgcdfxnhvjkkjnhbcedtgyfu8i9y7h60tg5fzrdeswza
      </div>
      <FormContainer/>

      <ModalProvider>
          <ModalButton/>
          <Modal title="My Modal 1" />  
          <Modal title="My Modal 2" />
          <Modal title="My Modal 3" />
      </ModalProvider>
     <BrowserRouter>
      <div className="page">
        <main>
        <nav>
          <Link to="/">Home</Link> | 
          <Link ref={linkRef} to="/about">About</Link>
        </nav>  
      </main>
      <aside>
          <h2>Related Products</h2>
          <p>Phone Case</p>
          <p>Screen Protector</p>
      </aside>
     </div>
      <Routes>
        
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />}>          
            {/* <Route path="Products/:category" element={<Products />}/> */}
            {/* <Route path="Products" 
                element={<ProtectedRoute isAuthenticated = {true}><Products/></ProtectedRoute>}/>          
        </Route>
        <Route path="*" element={<NotFound/>}/>
        
      </Routes>
   
    </BrowserRouter>
    <div className={theme}>
     <button type='submit' onClick={handleClick}>Go To About</button>
    </div>   */}
      {/* <LazyLoadcomp/>

      <Userprofile/>
       <Form  />  */}   
</div>
    </>
  )
}

export default App
