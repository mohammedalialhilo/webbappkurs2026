import Navbar from '../../utilities/menu.js';

const form = document.querySelector('form') as HTMLFormElement;

const initApp = () => {
  new Navbar();
};

const handleSubmit = async (e: SubmitEvent) => {
  e.preventDefault();

  try {
    const formData = new FormData(form);
    const data = Object.fromEntries(formData.entries());

    location.href = '/pages/users/login.html';
    form.reset();

  } catch (error: any) {
    console.log(error.message);
  }
};

initApp();

form.addEventListener('submit', handleSubmit);
