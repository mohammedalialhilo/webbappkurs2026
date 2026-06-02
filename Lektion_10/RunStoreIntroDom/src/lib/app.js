const header = document.querySelector('h1');
const button = document.querySelector('#btn');
const details = document.querySelector('.details');

function initApp(){
    console.log("Applikation är uppe och kör");
    console.log(header);
    header.innerText = 'Welcome to RunStore';
    header.style.color = 'red';
    header.style.backgroundColor= '#fdfd';
    header.style.textAlign = 'center';
    header.style.padding = '1rem';
    header.style.border = 'solid 1px #333';
    header.style.boxShadow = '0 0 10px 2px rgba(0,0,0,0.6)';


    const heading2 = document.createElement('h2');
    heading2.innerText= 'Heading 2';

    header.insertAdjacentElement('afterend',heading2);
    // document.appendChild(heading2);
    button.addEventListener('click', ()=> alert('Du klickade knappen!!!'));

    const button2 = document.createElement('button');
    button2.innerText = 'Klika på mig också';
    button2.addEventListener('click', ()=>   {const html = '<h3>Good</h3><p>Jag kommer från js</p>'; details.innerHTML = html;})
    header.insertAdjacentElement('afterend',button2);

    // const html = '<h3>Good</h3><p>Jag kommer från js</p>';
    // details.innerHTML = html;
}


initApp();