import React from 'react'

const DynamicContextInject = ({Component, componentProps}) => {
  return (
   <>
   <div style= {{marginBottom:"10px", padding:12, border: "1px solid #ccc"}}>
        <Component {...componentProps}/>
    </div>
   </>
  )
}

export default DynamicContextInject