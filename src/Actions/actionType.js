import FetchProducts from '../Services/FetchProducts'

export const getProducts = () =>{
    return async (dispatch) => {
      try
      {
        const data = await FetchProducts();
        console.log(data);
        const update = data.map((p)=>
         ({...p, liked:false}));

        dispatch({type:"GET_PRODUCTS", payload:update})
      }
      catch(err)
      {
        console.log(err);
      }
    }
}

export const toggleWishList = (id) => {
    return async (dispatch)  => {
        try
        {
            setTimeout(() => {
              return new Promise((res) => {dispatch({type:"TOGGLE_WISHLIST", payload: id})})  
            }, 500);
        }
        catch(err)
        {
            console.log(err);
        }

    }
}

