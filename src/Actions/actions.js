import store from "../Store";

store.dispatch({type: "ADD_ITEM", payload:"Laptop"});
store.dispatch({type: "ADD_ITEM", payload: "Mobile" });
store.dispatch({type: "REMOVE_ITEM", payload:"Laptop"});
store.dispatch({type: "INC" });
store.dispatch({type: "DEC" });
store.dispatch({type:"login", name: "Nithya"});
store.dispatch({type:"LogOut"});
store.dispatch({type:'ThemeReducer'});
 


