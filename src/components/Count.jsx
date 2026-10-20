import React from 'react'
import { useSelector,useDispatch } from 'react-redux'
 

const Count = () => {
    const count = useSelector((state) => state.count);
    const dispatch = useDispatch();

    const increment = () => {
      dispatch({type:"INC"})
    }

    const decrement = () => {
      dispatch({type:"DEC"})
    }

  return (
    <>
      <p>{count} 
        <button onClick={increment}>+</button> 
        <span/> 
        <button onClick={decrement}>-</button>
      </p>
    </>
  )
}

export default Count