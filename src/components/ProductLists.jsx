import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {getProducts} from '../Actions/actionType'
import {toggleWishList} from '../Actions/actionType'

const ProductLists = () => {
  const products = useSelector((state) =>  state.productList.products);
  const dispatch = useDispatch();
 
  useEffect(() =>{
    dispatch(getProducts());     
  },[])
  return (
     <>
        {products.map((p) => (
          <div key = {p.id} style= {{marginBottom:"10px"}}>
             <span>{p.title} - {p.price}</span>
             <button onClick={() => dispatch(toggleWishList(p.id))}> {p.liked ? "❤️" :"🤍"}</button>
          </div>
        ))}
     </>
  )
}

export default ProductLists