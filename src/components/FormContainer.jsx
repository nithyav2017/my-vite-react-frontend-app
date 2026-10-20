import React, {useState} from 'react'
import FormFields from './FormFields';

const FormContainer = () => {
  const [form, setForm] = useState({
    name: '',
    email: '',
    city: ''
  });

  const handleChange= (e) =>{
    setForm((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value 
    
    }));
  }

  const resetForm = () => {
    setForm({
      name: '',
      email: '',
      city: ''
    });
  }
  return (
    <>
    <div>FormContainer</div>
    {/* name field should be same as the form state key, this identifies which form properties this input controls */}
    <FormFields label = "FullName" name= "name" value= {form.name} onChange={handleChange}/>
    <FormFields label = "Email" name= "email" value= {form.email} onChange={handleChange}/>
    <FormFields label = "City" name= "city" value= {form.city} onChange={handleChange}/>
   
    <button onClick={resetForm}>Reset</button>
    </>

  )
}

export default FormContainer