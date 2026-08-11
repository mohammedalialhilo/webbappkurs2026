import Navbar from '../../utilities/menu.js';
import DataClient from '../../utilities/data-client.js';
import { IUser } from '../../models/IUser.js';

const logout = document.querySelector('#logout') as HTMLButtonElement;

const initApp = () => {
  new Navbar();

  if (!localStorage.getItem('token')) {
    location.href = '/pages/users/login.html';
  } else {
    loadUserInfo();
  }
};

const loadUserInfo = async () => {
  const token: string = JSON.parse(localStorage.getItem('token')!);
  const result = await new DataClient('accounts/user-info').getUserInfo(token);

  if (result) displayUserInfo(result);
};

const displayUserInfo = (user: IUser) => {
  const html = /*html*/ `
    <p>Namn: ${user.firstName} ${user.lastName}</p>
    <p>E-post adress: ${user.email}</p>
  `;

  (document.querySelector('#user-info') as HTMLDivElement).innerHTML = html;
};

const logOut = async () => {
  await new DataClient('accounts/logout').logOut();
  localStorage.removeItem('token');
  location.href = '/pages/users/login.html';
};

initApp();

logout.addEventListener('click', logOut);
