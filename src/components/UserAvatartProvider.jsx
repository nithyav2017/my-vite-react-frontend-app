import React,{useState} from 'react'
import UserAvatarContext from './Context/UserAvatarContext';

const UserAvatartProvider = React.memo( ({children}) => {

    const [images, setImages]= useState([]);


  return (
     <UserAvatarContext.Provider value={{images, setImages}}>
        {children}
     </UserAvatarContext.Provider>
  )
})

export default UserAvatartProvider