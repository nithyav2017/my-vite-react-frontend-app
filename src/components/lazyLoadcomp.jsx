import React ,{Suspense ,lazy, useEffect} from 'react'
 

const Header = lazy(() => import("./Home"));
  const About = lazy (() => import("./About"));
  const Contact = lazy(() => import("./Contact"));
const LazyLoadcomp = () => {

  

  useEffect(() =>{
    console.log('initial rendering');
  },[])
  
  return (
    <>
    <div>LazyLoadcomp</div>
    
    <Suspense fallback={<div>Loading...</div>}>
      <Header/>
    </Suspense>

    <Suspense fallback={<div>Loading About...</div>}>
      <About/>
    </Suspense>

    <Suspense fallback={<div>Loading Contact...</div>}>
      <Contact/>
    </Suspense>
    
    </>
  )
}

export default LazyLoadcomp