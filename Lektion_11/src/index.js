import { navbar } from "./utilities/menu.js";
import Cart from "./utilities/cart.js";

const initApp = () => {
  document.querySelector("header").insertAdjacentHTML("afterbegin", navbar);
  document.querySelector("#cart span").innerText = new Cart("cart").itemCount;
};

initApp();
