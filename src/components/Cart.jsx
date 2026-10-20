import React ,{useState} from 'react'
import useStore from './Store/ZusstandStore'

  const Cart = () => {
  const addProduct =useStore((state) => state.addProduct  );
  const [cart, setCart] = useState([
    {id: 1, name: "Product 1", price: 10.99, quantity: 1},
    {id: 2, name: "Product 2", price: 20.99, quantity: 2}
  ])

  const increaseQuantity = (id) => {
    setCart(prevCart =>  
        prevCart.map(item => 
	        item.id === id ? {...item, quantity: item.quantity + 1}: item));
  } // it doesn't need {} in the setCart because it implicitly returns the new state. 
  // If  use {}, we need to use return statement. Also {} is used to define block of code,
  // or any loop or conditional statement inside the funciton body or  When returning the
  // object literal directly we can use {}.

 const decreaseQuantity = (id) => {
    setCart(prevState => 
        prevState.map(item => 
            item.id === id ? {...item, quantity: item.quantity - 1}: item));
 }
 const product = {
        id: 1,
        name: "Laptop",
        quantity: 1
    };
  return (
    <>
    <div>Shopping Cart</div>
   
     {cart.map(item => (
            <div key = {item.id}>
                <p>{item.name} - Quantity : {item.quantity}</p>
                <button onClick= {() => increaseQuantity(item.id)}>+</button>
                <button onClick= {() => decreaseQuantity(item.id)}>-</button>
            </div>
        ))}
             
      <button onClick={() => addProduct(product)}>Add Product</button>
        
     

    </>
  )
}
export default Cart
