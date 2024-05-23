const cartValue =document.querySelector(".fa-cart-shopping");

export const updateCartValue=(cartProductls)=>{
    return cartValue.innerText =` ${cartProductls.length}`
}