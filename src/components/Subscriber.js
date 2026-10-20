import store from "../Store";

store.subscribe(() => {
    console.log("cart state", store.getState())
})