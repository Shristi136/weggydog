import { getCartProductFromLS } from "./getCartProductLS";
import { showToast } from "./showToast";
import { updateCartValue } from "./updateCartValue";

export const removeFromCart=(id)=>{

    let cartProducts = getCartProductFromLS(); 
    cartProducts=cartProducts.filter((curProd)=>curProd.id !==id);
    localStorage.setItem("cartProductls",JSON.stringify(cartProducts));

    let removeIdCard = document.getElementById(`card${id}`);
    removeIdCard.remove();

    showToast("delete", id);

    updateCartValue(cartProducts);
}