import { getCartProductFromLS } from "./getCartProductLS";
import { updateCartTotal } from "./updateCartTotal";
import { updateCartValue } from "./updateCartValue";

getCartProductFromLS();
export const addToCart=(event, id, stock)=>{

  const arrLocalStorageProduct = getCartProductFromLS();

    const  currentProdElement =document.querySelector(`#card${id}`);
    let quantity =currentProdElement.querySelector(".productQuantity").innerText;
    let price =currentProdElement.querySelector(".productPrice").innerText;

    price =price.replace("₹","")
    quantity = Number(quantity);
    price =Number(price *quantity);

    let existingprod = arrLocalStorageProduct.find((curprod)=>curprod.id ===id)

    if(existingprod && quantity>1){
      quantity=Number(existingprod.quantity) + Number(quantity);
      price = Number(price* quantity);

      let updateSameProdQuantity ={id, price, quantity};
      updateSameProdQuantity=arrLocalStorageProduct.map((curprod)=>{
      return curprod.id===id ? updateSameProdQuantity :curprod ;
      })
      localStorage.setItem("cartProductls",JSON.stringify(updateSameProdQuantity))
    }

    if(existingprod){
        alert("Product already in cart");
        return false;
    }

    arrLocalStorageProduct.push({id, price, quantity});
    localStorage.setItem("cartProductls",JSON.stringify(arrLocalStorageProduct));

    updateCartValue(arrLocalStorageProduct);

    // update cart total 
updateCartTotal();
}