import React, { useContext } from 'react'
import {UserContext}  from '../components/Reducer/UserReducer'
import styles from "./UserProfile/UserProfile.module.css"

 

const UserInfo = ({isAdmin}) => {
//    console.log("UserContext:", UserContext);
    console.log(isAdmin);
    const{state,dispatch} = useContext(UserContext);
  return (
   <>
   <div className={`${styles.container} ${isAdmin  ? styles.admin : styles.regular}`}>
    <h2 className={styles.name}>{state.name}</h2>
    <p className={styles.age}>{state.age}</p>

    <button onClick={() => dispatch({type:"UPDATE_NAME", payload:"Nithya Jayaganesh"})}>Update Name</button>
    <button onClick={() => dispatch({type:"INC_AGE", payload: state.age})}>Update Age</button>
    </div>
   </>
  )
}

export default UserInfo