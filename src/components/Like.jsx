import React from 'react'
import { useState } from 'react'
const Like = () => {
    const[count,setCount] = useState(0)
  return (
    <>
        <button type="submit" onClick={(() => setCount((prevState) =>  prevState + 1))}>Like</button>
        <p>{count}</p>
    </>
  )
}

export default Like