const header = document.querySelector('h1');
const button = document.querySelector('#btn');
const details = document.querySelector('.details');

function initApp() {
  //   console.log('Applikationen körs!!!');
  console.log(header);
  header.innerText = 'Welcome to RunStore!!!';
  header.style.color = 'red';
  header.style.backgroundColor = '#ddd';
  header.style.textAlign = 'center';
  header.style.padding = '1rem';
  header.style.border = 'solid 1px #333';
  header.style.boxShadow = '0 0 10px 2px rgba(0,0,0,0.6)';

  //   Skapa nytt element är två steg...
  // Steg 1. Skapa elementet...
  const heading2 = document.createElement('h2');
  console.log(heading2);
  heading2.innerText = 'Heading 2';

  //   Steg 2. placera element i dom (dokumentet)...
  //   header.insertAdjacentElement('afterbegin', heading2);
  header.insertAdjacentElement('afterend', heading2);

  // Hantera händelser...
  button.addEventListener('click', () => alert('Du klickade på mig'));

  //   Skapa knapp dynamiskt...
  const button2 = document.createElement('button');
  button2.innerText = 'Klicka på mig också!';
  button2.addEventListener('click', () =>
    alert('Du klickade på mig också 😳.'),
  );
  header.insertAdjacentElement('afterend', button2);

  //   Arbeta med placeholders...
  console.log(details);

  const html = '<h3>Woow va nice!</h3><p>Helt dynamiskt innehåll</p>';
  details.innerHTML = html;
}

initApp();
