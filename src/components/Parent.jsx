import React from 'react'
import useStore from './Store/ZusstandStore'

const Parent = () => {

  const [user, setUser] = React.useState(["Nithya", "Alice", "Bob" ]);
  const cart =useStore((state) => state.cart);

  const addUser =  (newUser) => {
    setUser([...user, newUser]);
  }
  return (
    <>
    <div>Parent</div>
    <ul>
       
            {cart.map((item) => (
                 <li>
                    <div key = {item.id}>
                        <p>{item.name} - Quantity : {item.quantity}</p>
                    </div>
                </li> 
            ))}
                
    </ul>
    <ul>
      {user.map((name, index) => ( <li key={index}>{name}</li> ))}
    </ul>
    <Child onAddUser={addUser} />
    </>
  )
}

export default Parent