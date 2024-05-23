import { getCartProductFromLS } from "./getCartProductLS";

export const updateCartTotal =()=>{

    const subTotal=document.querySelector(".subTotal");
    const finalTotal=document.querySelector(".finalTotal");

    let cartPriceUpdate = getCartProductFromLS();
     let initialValue=0;
    let totalBill = cartPriceUpdate.reduce((accum, curEle)=>{
         let productPrice = parseInt(curEle.price) || 0;
         return accum + productPrice;
    },initialValue)
    // console.log(totalBill);
    if(subTotal){
        subTotal.textContent= `₹ ${totalBill}`;
    }
   if(finalTotal){
    finalTotal.textContent = `₹ ${totalBill + 50}`
   }
}