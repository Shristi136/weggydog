import { addToCart } from "./addToCart";
import { homeQuantityToggle } from "./homeQuantityToggle";

const productContainer=document.getElementById("productContainer");
const productTemplate=document.getElementById("productTemplate");

export const showProductContainer=(products)=>{
    if(!products){
        return false
    }

    products.forEach((curProd)=> {
        const{id, name, category, price, stock, description, image} = curProd;
        let productClone = document.importNode(productTemplate.content, true);
        productClone.querySelector("#cardValue").setAttribute("id", `card${id}`);
        productClone.querySelector(".productName").textContent = name;
        productClone.querySelector(".category").textContent = category;
        productClone.querySelector(".productPrice").textContent =" ₹ "+ price;
        productClone.querySelector(".productActualPrice").textContent =2* price;
        productClone.querySelector(".productDescription").textContent = description;
        productClone.querySelector(".productImage").src = image;
        productClone.querySelector(".productImage").alt = name;
        productClone.querySelector(".productStock").textContent = stock;
        productClone.querySelector(".stockElement").addEventListener("click",(event)=>{
            homeQuantityToggle(event, id, stock,price);
        })

        productClone.querySelector(".add-to-cart-button").addEventListener("click",(event)=>{
            addToCart(event,id,stock);
        })

        productContainer.append(productClone);
        
    });
}