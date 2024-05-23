import { getCartProductFromLS } from "./getCartProductLS";
import { updateCartTotal } from "./updateCartTotal";

export const incrementDecrement=(event, id, stock, price)=>{
    const  currentCardElement =document.querySelector(`#card${id}`);
    // console.log(currentCardElement);
    
    const productQuantity =currentCardElement.querySelector(".productQuantity");
    // console.log(productQuantity);

    const productPrice =currentCardElement.querySelector(".productPrice");
    // console.log(productPrice);

    let quantity=1;
    let cartPrice=0;
    const cartPriceUpdate = getCartProductFromLS();
    let existingprod = cartPriceUpdate
    existingprod.find((curProd)=> curProd.id === id);
    if(existingprod){
        quantity=existingprod.quantity;
        cartPrice=existingprod.price;
    }
    else{
        cartPrice=price;
        price=price;
    }

    if(event.target.className ==="cartIncrement"){
        if(quantity<stock){
            quantity +=1
        }
        else if(quantity===stock){
            quantity===stock;
            cartPrice= price * stock;
        }
    }

    if(event.target.className ==="cartDecrement"){
        if(quantity > 1){
            quantity -=1
        }
    }

// we will update price at localStorage 
    
    cartPrice= price * quantity;
    cartPrice = Number(cartPrice.toFixed(2));

    let updateSameProdQuantity ={id, quantity, price:cartPrice};
      updateSameProdQuantity=cartPriceUpdate.map((curprod)=>{
      return curprod.id===id ? updateSameProdQuantity :curprod ;
      })
      localStorage.setItem("cartProductls",JSON.stringify(updateSameProdQuantity))

    productQuantity.innerText = quantity;
    productPrice.innerText = cartPrice;
 
    // update cart total 
updateCartTotal();
}