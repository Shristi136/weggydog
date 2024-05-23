import products from "./api/product.json";
import { fetchFromCartProductls } from "./fetchFromCartProductls";
import { getCartProductFromLS } from "./getCartProductLS";
// import { homeQuantityToggle } from "./homeQuantityToggle";
import { incrementDecrement } from "./incrementDecrement";
import { removeFromCart } from "./removeFromCart";
import { updateCartTotal } from "./updateCartTotal";

let cartProducts = getCartProductFromLS(); 

let filterProducts = products.filter((apiprod)=>{
    return cartProducts.some((curEle)=> curEle.id === apiprod.id);  
});
// console.log(filterProducts);


const productCartContainer =document.getElementById("productCartContainer");
const productCartTemplate =document.getElementById("productCartTemplate");
const showCartProducts =()=>{
filterProducts.forEach((curProd)=>{
    const {category, id, image, name, price, stock}=curProd;
    let productClone = document.importNode(productCartTemplate.content, true);
    productClone.querySelector("#cardValue").setAttribute("id", `card${id}`);

    let lsActualData = fetchFromCartProductls(id,price);

    productClone.querySelector(".category").textContent = category;
    productClone.querySelector(".productImage").src = image;
    productClone.querySelector(".productImage").alt = name;
    productClone.querySelector(".productName").textContent = name;
    productClone.querySelector(".productPrice").textContent = lsActualData.price;
    productClone.querySelector(".productQuantity").textContent=lsActualData.quantity;
    productClone.querySelector(".stockElement").addEventListener("click",(event)=>{
      incrementDecrement(event, id, stock, price);
    })
    productClone.querySelector(".remove-button").addEventListener("click", ()=>removeFromCart(id));

    productCartContainer.append(productClone);
})
}
showCartProducts()

// update cart total 
updateCartTotal();