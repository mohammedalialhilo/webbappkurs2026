import Navbar from '../../utilities/menu.js';
import DataClient from '../../utilities/data-client.js';

const form = document.querySelector('form') as HTMLFormElement;

const initApp = () => {
  new Navbar();
};

const handleSubmit = async (e: SubmitEvent) => {
  e.preventDefault();

  const formData = new FormData(form);
  const data = Object.fromEntries(formData.entries());
  form.reset();
  location.href = '/pages/users/profile.html';
};

initApp();

form.addEventListener('submit', handleSubmit);
