import Navbar from '../../utilities/menu.js';
import Cart from '../../utilities/cart.js';

const form = document.querySelector('form');
const paymentInfo = document.querySelector('#payment-info');

const cart = new Cart('cart');
const menu = new Navbar();

const initApp = () => {
  if (cart.getCartItems().length === 0) {
    hideButton();
  }

  displayPaymentInfo();
};

const displayPaymentInfo = () => {
  let html = '';
  const items = cart.getCartItems();

  const subTotal = items.reduce((acc, current) => {
    return acc + current.quantity * current.price;
  }, 0);

  html = /*html*/ `
      <p>Summa att betal: <span> ${subTotal}</span></p>
      <p>Frakt: <span>250 Kr</span></p>
      <p>Moms ingår med: <span> ${(subTotal + 250) * 0.25} (25%)</span></p>
    `;

  paymentInfo.innerHTML = html;
};

const handleSubmit = (e) => {
  e.preventDefault();

  const cart = new Cart('cart');
  cart.clearCart();

  menu.updateCartInfo();
  hideButton();
  document.querySelector('.confirmation').style.display = 'block';
};

const hideButton = () => {
  document.querySelector('button').style.visibility = 'hidden';
};

initApp();

form.addEventListener('submit', handleSubmit);
