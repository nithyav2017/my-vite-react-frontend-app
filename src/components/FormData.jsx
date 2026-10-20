import React , {useState} from 'react'
 

const Form = () => {

const[formData, setFormData] = useState({
    name: "",
    email: ""      
});

const handleChange= (e) => {
    const {name,value} = e.target;
    setFormData(prevState => ({
        ...prevState,
        [name]: value // since name is dynamic key  we use [].
    }))
}
  return (
    <>
    <div>FormData</div>
    <input type="text" value= {formData.name}  onChange = {(e) => handleChange(e)}
        placeholder='Name' name='name'/>
    <input type="email" value= {formData.email}  onChange = {(e) => handleChange(e)}
        placeholder='Email' name='email'/>
    </>
  )
}

export default Form