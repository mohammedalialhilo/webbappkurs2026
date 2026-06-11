import Cart from './cart.js';

export default class Navbar {
  #elem = undefined;

  constructor() {
    const navbar = this.#createNavbar();
    document.querySelector('header').insertAdjacentHTML('afterbegin', navbar);
    this.updateCartInfo();
  }

  updateCartInfo() {
    document.querySelector('#cart span').innerText = new Cart('cart').itemCount;
  }

  #createNavbar() {
    return /*html*/ `
        <nav>
            <ul>
            <li class="logo">
                <a href="/">
                <img src="/assets/images/runstore.png" alt="logotype" />
                <span>RunStore</span>
                </a>
            </li>
            <li class="toggle">
                <input type="checkbox" id="menu-btn" class="menu-btn" />
                <label for="menu-btn" class="menu-icon">
                <span class="nav-icon"></span>
                </label>
            </li>
            <li class="menu-item"><a href="/">Start</a></li>
            <li class="menu-item">
                <a href="/pages/products/products.html">Produkter</a>
            </li>
            <li class="menu-item">
                <a href="/pages/about/about.html">Om oss</a>
            </li>
            <li class="menu-item">
                <a href="/pages/contact/contact.html">Kontakta oss</a>
            </li>
            <li class="menu-item">
                <a id="cart" href="/pages/cart/cartpage.html"><i class="fa-sharp fa-light fa-bag-shopping"></i>
                <span>0</span>
            </a>
            </li>
            <li class="menu-item">
                <a href="/pages/users/login.html"><i class="fa-light fa-circle-user"></i></a>
            </li>
            </ul>
        </nav>`;
  }
}
