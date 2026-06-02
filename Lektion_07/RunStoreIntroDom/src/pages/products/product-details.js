import { navbar } from "../../utilities/menu.js";
import DataClient from "../../utilities/data-client.js";

const heading = document.querySelector("h1");
const productDetails = document.querySelector("#product-details");

const initApp = async () => {
  document.querySelector("header").insertAdjacentHTML("afterbegin", navbar);
  const id = location.search.split("=")[1];

  if (!id) return;
  const client = await new DataClient();
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
      <section>
        <p>Beskrivning: <br> ${product.description}</p>
      </section>
      <p>Pris: ${product.price.toLocaleString("se-SV", { minimumFractionDigits: 2 })} Kr</p>
    </article>
  `;

  productDetails.innerHTML = html;
};
initApp();
