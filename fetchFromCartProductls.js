import { getCartProductFromLS } from "./getCartProductLS";

export  const fetchFromCartProductls=(id,price)=>{

    let cartProducts = getCartProductFromLS(); 

    let existingprod =cartProducts.find((curProd)=> curProd.id===id);
    let quantity =1;

    if(existingprod){
        quantity=existingprod.quantity;
        price=existingprod.price;
    }
    return{quantity,price};
}