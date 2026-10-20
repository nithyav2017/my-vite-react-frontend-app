import { combineReducers } from "@reduxjs/toolkit";
import CountReducer from "./CountReducer";
import AuthReducer from "./AuthReducer";
import {ProductListReducer } from "./ProductListreducer";

const RootReducer = combineReducers({
    Auth:AuthReducer,
    count: CountReducer  ,
    productList: ProductListReducer  
})

export default RootReducer;