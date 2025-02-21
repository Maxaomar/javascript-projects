import { products } from "../data/products.js";
const root = document.getElementById("root")



let productsHTML;

products.forEach((product) => {
    productsHTML += `
    <div>
        <div class="product-image">${product.image}</div>
        <div class="product-name">${product.name}</div>
        <div class="product-ratings">
            <div>${product.rating.stars}</div>
            <div>${product.rating.count}</div>
        </div>
        <div class="product-price">${product.priceCents}</div>
     </div>
    `
    root.innerHTML = productsHTML;
})


