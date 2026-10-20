import React from 'react'

const FormFields = ({label, name, value, onChange}) => {
    
  return (
    <>
     
    <label>{label}</label>
    <input type="text" name={name} value={value} onChange={onChange} />
    </>
  )
}

export default FormFields