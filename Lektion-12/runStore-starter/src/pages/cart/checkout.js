import Navbar from '../../utilities/menu.js';
import Cart from '../../utilities/cart.js';

const form = document.querySelector('form');

const initApp = () => {
  new Navbar();
};

const handleSubmit = (e) => {
  e.preventDefault();

  const cart = new Cart('cart');
  cart.clearCart();

  document.querySelector('#cart span').innerText = new Cart('cart').itemCount;
  document.querySelector('.confirmation').style.display = 'block';
};

initApp();

form.addEventListener('submit', handleSubmit);
