/*
    Typ omvandling...
    1.  Conversion = explicit typomvandling => tvingande
    2.  Coersion = implicit typomvandling => automatisk(gör så gött den kan)

    sträng => tal, tal => sträng
*/

// Conversion (explicit)
const birthYear = 'Kalle';
console.log(birthYear, typeof birthYear);

// (Coersion)
console.log(birthYear + 10);

// Explicit(Conversion)
console.log(Number(birthYear) + 10);
// console.log(typeof NaN);
console.log(typeof null);

const regNumber = 2019;
console.log(regNumber + 'ABC');

const number = '10';
console.log(Number(number));
console.log(+number);

let x = '1' + 1;
console.log('x = ', x);

x = x * '2';
console.log('x = ', x);

x = '22';
x = x / 2;
console.log(x);

const y = '10' - '2' - 3 + '5';
console.log('y = ', y);

// 10 - 2 - 3 = 5 + '5' = 55
