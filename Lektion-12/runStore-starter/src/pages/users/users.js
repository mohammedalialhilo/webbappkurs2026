import Navbar from "../../utilities/menu.js";
import DataClient from "../../utilities/data-client.js";
import Cart from "../../utilities/cart.js";

const form = document.querySelector("form");

const initApp = () => {
  new Navbar();
};

const handleSubmit = async (e) => {
  e.preventDefault();

  try {
    const formData = new FormData(form);
    const data = Object.fromEntries(formData.entries());
    const client = new DataClient("accounts/register");
    const result = await client.add(data);

    if (result) {
      location.href = "/pages/users/login.html";
      form.reset();
    }
  } catch (error) {
    console.log(error.message);
  }
};

initApp();

form.addEventListener("submit", handleSubmit);
