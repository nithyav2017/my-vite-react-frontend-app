import React ,{createContext, useMemo, useState,useReducer} from 'react'
import { InitialState, UserReducer, UserContext } from '../Reducer/UserReducer';

 

//react.memo can skip the UserProvider when its props are unchanged , based on a shallow comparison

const UserProvider = React.memo(({children}) => {

    //const [user, setuser] = useState({name:"Nithya Jayaganesh", age: 45});

    const [state, dispatch] = useReducer( UserReducer,InitialState);

    //react reuses the same context object while name remains unchanged , assuming the component re-renders for another reason
   /*  const updateUser = useMemo( ({newuser}) =>{
        setuser((prev) => ({
            ...prev, ...newuser
        }))}) */

    
    
  return (
    // <Usercontext.Provider  value = {{user, updateUser}}>{children}</Usercontext.Provider>
    <UserContext.Provider  value = {{state,dispatch}}>{children}</UserContext.Provider>
  )
})
 
export default   UserProvider   

