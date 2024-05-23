import { updateCartValue } from "./updateCartValue";

export const getCartProductFromLS=()=>{
    let cartProductls =localStorage.getItem("cartProductls");

    if(!cartProductls){
        return [];
    }

    cartProductls=JSON.parse(cartProductls);
    updateCartValue(cartProductls);
    return cartProductls;
}