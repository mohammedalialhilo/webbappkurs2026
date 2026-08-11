import Navbar from '../../utilities/menu.js';
import DataClient from '../../utilities/data-client.js';
import Cart from '../../utilities/cart.js';

const heading = document.querySelector('h1');
const productDetails = document.querySelector('#product-details');

const cart = new Cart('cart');
let menu = undefined;

const initApp = async () => {
  menu = new Navbar();

  const id = location.search.split('=')[1];
  if (!id) return;

  const client = new DataClient('products');
  const product = await client.findById(id);
  if (!product) return;

  displayProduct(product);
};

const displayProduct = (product) => {
  let html = '';
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
      <p>${product.price.toLocaleString('se-SV', { minimumFractionDigits: 2, maximumFractionDigits: 2 })} Kr</p>
    </article>
  `;

  productDetails.innerHTML = html;

  document
    .querySelector('#addToCart')
    .addEventListener('click', (e) => handleAddToCart(e, product));
};

const handleAddToCart = (e, product) => {
  e.preventDefault();

  cart.updateCart(product);
  menu.updateCartInfo();
};

initApp();
