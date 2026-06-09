import { navbar } from "../../utilities/menu.js";
import DataClient from "../../utilities/data-client.js";
import Cart from "../../utilities/cart.js";

const heading = document.querySelector("h1");
const productDetails = document.querySelector("#product-details");
const cart = new Cart("cart");
const initApp = async () => {
  document.querySelector("header").insertAdjacentHTML("afterbegin", navbar);
  document.querySelector("#cart span").innerText = cart.itemCount;
  const id = location.search.split("=")[1];
  if (!id) return;

  const client = new DataClient("products");
  const product = await client.findById(id);
  if (!product) return;

  displayProduct(product);
};

const displayProduct = (product) => {
  let html = "";
  heading.innerText = product.name;

  html = /*html*/ `
    <article>
      <div>
        <img src="../../assets${product.imageUrl}" alt="${product.name}">
        <button id="addToCart" title="Lägg i kundvagn"><i class="fa-thin fa-basket-shopping"></i></button>
      </div>
      <section>
          <p>${product.description}</p>
      </section>
      <p>${product.price.toLocaleString("se-SV", { minimumFractionDigits: 2, maximumFractionDigits: 2 })} Kr</p>
    </article>
  `;

  productDetails.innerHTML = html;

  document
    .querySelector("#addToCart")
    .addEventListener("click", (e) => addToCart(e, product));
};

const addToCart = (e, product) => {
  e.preventDefault();
  console.log(product);

  product.quantity = 1;
  updateCart(product);
};

const updateCart = (item) => {
  let cartItems = cart.getCartItems();

  if (cart.itemCount === 0) {
    cartItems.push(item);
  } else {
    const cartItem = cartItems.find((product) => product.id === item.id);
    if (cartItem) {
      cartItem.quantity++;
      cartItems = cartItems.filter((product) => product.id !== item.id);
      console.log("filtered cartItems: ", cartItems);
      cartItems.push(cartItem);
    } else {
      cartItems.push(item);
    }
  }
  cart.setCartItems(cartItems);
  document.querySelector("#cart span").innerText = cart.itemCount;
};

initApp();
