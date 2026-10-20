
const initialState = { 
    isLoggedIn: false,
    user:null
}

const AuthReducer =(state = initialState, action) =>
{
    switch (action.type)
    {
        case "LogIn" :
            {

                return{...state,
                    
                    isLoggedIn:true,  user: action.payload}
            }
        case "LogOut":
            {
                return{...state, isLoggedIn:false, user:null}
            }
        default:
            return state;
    }
}
export default AuthReducer; 