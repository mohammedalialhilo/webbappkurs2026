let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// console.log(numbers);

// Spread operatorn...
const numbers_2 = [...numbers];
// console.log(numbers_2);

// concat slår samman arrayer
const characters = ['a', 'b', 'c'];
// console.log(characters.concat(numbers));
// console.log(numbers.concat(characters));
// spread operatorn funkar lika bra.
const spreadConcat = [...characters, ...numbers];
console.log(...characters, ...numbers);

// join() kan göra om en array till en sträng...
// console.log(numbers.join(' '));
// console.log(numbers.join(','));
// console.log(numbers.join(';'));

// Destructuring...
// Före E6
// console.log(numbers[0]);
// console.log(numbers[2]);
// console.log(numbers[5]);

// Med E6...
const [bengan, y, michael, wilma] = numbers;
// console.log(bengan, y, michael, wilma);

let [first, last] = numbers;
console.log(first, last);

// Kasta om ordningen...
[first, last] = [last, first];
console.log(first, last);

// Nästlade arrayer...
const nestedArray = [3, 4, [1, 2]];
console.log(nestedArray);

// const [x, z, [a, b]] = nestedArray;
// console.log(x);
// console.log(z);
// console.log(a);
// console.log(b);
const [, z, [a, b]] = nestedArray;
// console.log(z);

// Objekt och destructuring...
const car = {
  id: 1,
  regNo: 'ABC123',
  manufacturer: 'Volvo',
  model: 'XC60',
  mileage: '100000',
  modelYear: 2017,
};

const { regNo, manufacturer, model } = car;

console.log(regNo, manufacturer, model);
