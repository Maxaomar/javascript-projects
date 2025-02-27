import { products } from "../data/products.js";
const displayProducts = document.querySelector(".main")



let productsHTML = '';

products.forEach((product) => {
    productsHTML += `
    <div class="product-container">
        <div  class="product-image-container">
           <img src="${product.image}" alt="">
        </div>

        <div class="product-name">${product.name}</div>

        <div class="product-rating-container">
            <img src="images/ratings/rating-${product.rating.stars * 10}.png" alt="">
            <div class="product-rating-count">${product.rating.count}</div>
        </div>

        <div class="product-price"> $${(product.priceCents / 100).toFixed(2)}</div>

        <div class="product-quantity-container">
          <select name="" id="">
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
            <option value="6">6</option>
            <option value="7">7</option>
            <option value="8">8</option>
            <option value="9">9</option>
            <option value="10">10</option>
         </select>
        </div>

     <button class="" id="">Add to cart</button>
     </div>
    `
});

displayProducts.innerHTML = productsHTML;

