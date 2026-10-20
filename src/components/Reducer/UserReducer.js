import React, { createContext } from 'react'


export const UserContext = createContext();

const InitialState= {
    name: "Nithya", age: 30
};

const UserReducer = (state, action) => {
  switch (action.type)
  {
    case "UPDATE_NAME":
      return {
          ...state, name: action.payload
      };
    
    case "INC_AGE":
      return {
        ...state, age: state.age+1
      };
    
    default:
        return state;
  }
    
   
}
export {InitialState, UserReducer};
 