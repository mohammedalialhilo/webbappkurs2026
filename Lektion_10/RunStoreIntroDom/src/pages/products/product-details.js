import { navbar } from "../../utilities/menu.js";
import DataClient from "../../utilities/data-client.js";
import Cart from "../../utilities/cart.js";

const heading = document.querySelector("h1");
const productDetails = document.querySelector("#product-details");

const initApp = async () => {
  document.querySelector("header").insertAdjacentHTML("afterbegin", navbar);
  const id = location.search.split("=")[1];

  if (!id) return;
  const client = await new DataClient('products');
  const product = await client.findById(id);
  if (!product) return;
  displayProduct(product);
};


const displayProduct = (product) => {
  let html = " ";
  heading.innerText = product.name;

  html = /*html*/ `
    <article>
      <img src="../../assets${product.imageUrl}" alt="${product.name}">
      <button id="addToCart" title="Add To cart"><i class="fa-thin fa-basket-shopping"></i></button>
      <section>
        <p>Beskrivning: <br> ${product.description}</p>
      </section>
      <p>Pris: ${product.price.toLocaleString("se-SV", { minimumFractionDigits: 2 })} Kr</p>
    </article>
  `;

  productDetails.innerHTML = html;

  document.querySelector("#addToCart").addEventListener("click", (e) => addToCart(e, product));
};


const addToCart = (e, product) => {
  e.preventDefault();
  console.log(product);

  product.quantity = 1;
  updateCart(product);
}

const updateCart = (item) => {
  const cart = new Cart('cart');
  const cartItems = cart.getCartItems();
  cartItems.push(item);
  cart.setCartItems(cartItems);
}
initApp();
