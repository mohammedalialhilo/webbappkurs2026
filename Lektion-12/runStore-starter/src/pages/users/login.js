import Navbar from "../../utilities/menu.js";
import Cart from "../../utilities/cart.js";
import DataClient from "../../utilities/data-client.js";

const form = document.querySelector("form");

const initApp = () => {
  new Navbar();
};

const handleSubmit = async (e) => {
  e.preventDefault();
  const formData = new FormData(form);
  const data = Object.fromEntries(formData.entries());
  const client = new DataClient("login");
  const result = await client.login(data);

  console.log(result);

  // location.href = '/pages/users/profile.html';
};

initApp();

form.addEventListener("submit", handleSubmit);
