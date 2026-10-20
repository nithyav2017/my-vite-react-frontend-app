const intialState = {
    products: []
}

export const ProductListReducer = (state = intialState, action) =>
{
    switch (action.type)
    {
        case "GET_PRODUCTS" :
            return {
                
                ...state, products: action.payload };
          
        case "TOGGLE_WISHLIST":
        {
            
            return {...state, products: state.products.map((p) =>               
                p.id === action.payload ? {...p, liked: !p.liked}: p
            )}
        }
        default: 
            return state;

    }


}