


export const homeQuantityToggle=(event, id, stock)=>{
   const  currentCardElement =document.querySelector(`#card${id}`);
    console.log(currentCardElement);
    
    const productQuantity =currentCardElement.querySelector(".productQuantity");
    console.log(productQuantity);

    const productPrice =currentCardElement.querySelector(".productPrice");
    console.log(productPrice);

    let quantity =parseInt(productQuantity.getAttribute("data-quantity")) || 1;

    if(event.target.className ==="cartIncrement"){
        if(quantity<stock){
            quantity +=1
            // updateUI()
        }
        else if(quantity===stock){
            quantity===stock;
            
        }

    }

    if(event.target.className ==="cartDecrement"){
        if(quantity > 1){
            quantity -=1
            // updateUI()
        }
    }

    productQuantity.innerText=quantity;
    productQuantity.setAttribute("data-quantity", quantity.toString());
    return quantity;


    // function updateUI() {
    //     productQuantity.textContent = quantity;
    //     productPrice.innerText=Number(productPrice * productQuantity);
    //     // productPrice.innerText =Number(productPrice * quantity);
      
    // }

}


