import React from 'react'
import { useLocation, useParams } from 'react-router-dom'

const ProductDetails = () => {

  const {id} = useParams();

 const {products} = location.state || {};
  return (
    <>
    <div>ProductDetails</div>
      <p>Product Id: {products.id}</p>
     <p>product name: {products.name}</p>
   

    </>
  )
}

export default ProductDetails

