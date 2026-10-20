import { configureStore } from "@reduxjs/toolkit";
import RootReducer from "./components/Reducer/RootReducer";
import { thunk } from "redux-thunk";
 

const  store = configureStore( {reducer: RootReducer, middleware: (getDefaultMiddleware) =>
                                getDefaultMiddleware()}) ;


export default store