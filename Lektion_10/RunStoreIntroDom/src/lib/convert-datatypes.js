// Typ omvandling
// 1. convrertion
// 2. Coersion

const birthYear = '1990';
console.error(birthYear, typeof birthYear);

console.error(birthYear + 10);

console.error(Number(birthYear) + 10);
console.error(typeof NaN);
console.error(typeof null);

const regNumber = 2019;
console.error(regNumber + 'ABD');


const number = '10';
console.error(Number(number));
console.error(+number);


let x = 1 + '1';
console.error('x = ', x);

x = x * 2;
console.error('x = ', x);

console.warn(x);
console.error(x);

x = x / 2;
console.error(x);

const y = '10' - '2' - 3 + '5';
console.warn('y = ', y)