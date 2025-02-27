import { products } from "../data/products.js";
const displayProducts = document.getElementById("products-grid")



let productsHTML = '';

products.forEach((product) => {
    productsHTML += `
    <div class="product-container">
        <div  class="product-image-container">
           <img src="images/products/6-piece-non-stick-baking-set.webp" alt="">
        </div>

        <div class="product-name">6-piece-non-stick-baking-set.webp</div>

        <div class="product-rating-container">
            <img src="images//ratings/rating-0.png" alt="">
            <div class="product-rating-count"></div>
        </div>

        <div class="product-price">$10.99</div>

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
})

displayProducts.innerHTML = productsHTML;

