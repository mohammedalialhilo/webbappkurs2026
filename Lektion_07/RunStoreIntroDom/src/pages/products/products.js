import { products } from "../../Data/products.js";
import { navbar } from "../../utilities/menu.js";

const productList = document.querySelector("#product-list");
const initApp = () => {
  document.querySelector("header").insertAdjacentHTML("afterbegin", navbar);
  displayProducts();
};
const displayProducts = () => {
  console.log(products);
  let html = "";
  products.map(
    (product) =>
      (html += `
    <section class="product-item">
        <h4>${product.name}</h4>
        <a href="product-details.html?id=${product.id}">
            <img src="../../assets${product.imageUrl}" alt="${product.name}"/>
        </a>
        <p>${product.price.toFixed(2)} Kr</p>
    </section>

    `),
  );
  productList.innerHTML = html;
};
initApp();
