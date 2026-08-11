import Navbar from '../../utilities/menu.js';
import Cart from '/utilities/cart.js';

const content = document.querySelector('#shopping-cart');

const cart = new Cart('cart');

let navbar = undefined;
const initApp = () => {
  navbar = new Navbar();
  loadCart();
};

const handleIncrementCart = (e) => {
  const id = e.target.parentElement.getAttribute('id');
  cart.incrementItem(id);
  loadCart();
};

const handleDecrementCart = (e) => {
  const id = e.target.parentElement.getAttribute('id');
  cart.decrementItem(id);
  loadCart();
};

const handleRemoveItemFromCart = (e) => {
  const id = e.target.parentElement.getAttribute('id');
  cart.removeItem(id);
  loadCart();
};

const loadCart = () => {
  content.innerHTML = '';
  const cart = new Cart('cart');
  const cartItems = cart.getCartItems();
  navbar.updateCartInfo();
  displayCartContent(cartItems);
};

const displayCartContent = (items) => {
  const productDisplay = createProductDisplay(items);
  const orderInfo = createOrderInfo(items);

  content.insertAdjacentHTML('afterbegin', productDisplay);
  content.insertAdjacentHTML('beforeend', orderInfo);

  const buttons = document.querySelectorAll('button');

  buttons.forEach((button) => {
    if (button.firstChild.classList.contains('fa-plus')) {
      button.addEventListener('click', handleIncrementCart);
    } else if (button.firstChild.classList.contains('fa-minus')) {
      button.addEventListener('click', handleDecrementCart);
    } else if (button.firstChild.classList.contains('fa-trash-can')) {
      button.addEventListener('click', handleRemoveItemFromCart);
    }
  });
};

const createProductDisplay = (items) => {
  let html = '<section>';

  if (items.length === 0) {
    html = '<h3 class="message">Din kundvagn är tom!</h3>';
  }

  items.map(
    (item) =>
      (html += /*html*/ `
        <section class="cart-content">
            <img class="thumbnail" src="/assets${item.imageUrl}" alt="${item.name}">
            <section>
                <p>${item.name}</p>
                <p><span>Pris</span> ${item.price.toLocaleString('se-SV', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</p>
            </section>
            <section>
                <span>Antal</span>
                <span>${item.quantity}</span>
                <div>
                    <button id="${item.id}"><i class="fa-regular fa-plus"></i></button>
                    <button id="${item.id}"><i class="fa-regular fa-minus"></i></button>
                    <button id="${item.id}"><i class="fa-regular fa-trash-can"></i></button>
                </div>
            </section>
        </section>
    `),
  );

  html += '</section>';
  return html;
};

const createOrderInfo = (items) => {
  const subTotal = items.reduce((acc, current) => {
    return acc + current.quantity * current.price;
  }, 0);

  const orderInfo = /*html*/ `
      <section class="order-info">
          <h3>Beställningsinformation</h3>
          <div class="amount">
              <p>Summa</p>
              <p>${subTotal}</p>
          </div>
          <div class="amount">
              <p>Frakt</p>
              <p>${250}</p>
          </div>
          <div class="amount">
              <p>Att betala</p>
              <p>${subTotal + 250}</p>
          </div>
          <a href="/pages/cart/checkout.html" class="btn btn-rounded">Gå till kassan</a>
      </section>
  `;

  return orderInfo;
};

initApp();
