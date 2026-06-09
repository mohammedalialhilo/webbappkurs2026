import { navbar } from "../../utilities/menu.js";
import DataClient from "../../utilities/data-client.js";
import Cart from "../../utilities/cart.js";

const form = document.querySelector("form");

const initApp = () => {
  document.querySelector("header").insertAdjacentHTML("afterbegin", navbar);
  document.querySelector("#cart span").innerText = new Cart("cart").itemCount;
};

const handleSubmit = (e) => {
  e.preventDefault();
  location.href = "/pages/users/profile.html";
};

initApp();

form.addEventListener("submit", handleSubmit);
