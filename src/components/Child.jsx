import React, { forwardRef, useImperativeHandle } from 'react'

const Child = forwardRef (({name}, ref) => {

const [value, setValue] = React.useState('');

  useImperativeHandle(ref, () => ({
    reset: () => {
      console.log("Reset button clicked");
      setValue('');
    }
  }));

  return (
    <>
    <div>{name}</div>
    <input type="text" value={value} onChange={(e) => setValue(e.target.value)} />
    <p>{value}</p>
    </>
  )
});

export default Child