 import React from 'react'
 import { useState ,useEffect} from 'react'
 import { useNavigate, useParams, useSearchParams } from 'react-router-dom';

 
 
 const Products = ({product}) => {
    const navigate = useNavigate();
    const {id} = useParams();
    const searchParams = useSearchParams(location.search);

     
    const [products, setProducts] = useState({
        "id" : [1,2,3],
        "name": ["Product 1", "Product 2", "Product 3"],
        "price": [10.99, 20.99, 30.99],
        "quantity": [1, 2, 3],
        "shipping":{
            option1: "Standard Shipping",
            option2: "Express Shipping",
            option3: "Overnight Shipping"
        }
    });
    
    //to navigate to externl link use windows.location.href()
    
    const handleChange= (query) => {
            navigate('/result?serach=${encodeURIComponent(query)}');
    }

    //url params
    //navigate('/result/${params}')
 

    useEffect(() => {
        const timer = setTimeout(() => {
            navigate('/login');
        }, 5000);

        return () => clearTimeout(timer)
    },[]);

    

   return (
    <>
     <div>Products</div>
     <table>
        <thead>
            <tr>
                <td>Products</td>
                <td>Prices</td>
                <td>Quantities</td>
                <td>Total</td>
                </tr>
        </thead>
        <tbody>
            {products.name.map((product,index) => (        
            <tr key={index}>     
                <td><span>{product}</span></td>
                <td><span>${products.price[index].toFixed(2)}</span></td>
                <td><span>{products.quantity[index]}</span></td>
                <td><span>${(products.price[index] * products.quantity[index]).toFixed(2)}</span></td>
            </tr>
            ))}
       </tbody>
       </table>
       <input type='text' placeholder='Search Products' onChange ={(e) => handleChange( e.target.value)}/>
 
     </>
   )
}
 
 export default Products