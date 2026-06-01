let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// console.log(numbers);

const numbers2 = [...numbers];
// console.error(numbers2);

const characters = ['a', 'b', 'c'];
// console.log(characters.concat(numbers));
console.log(...characters, ...numbers);

const spreadConcat = [...characters, ...numbers];
console.log(spreadConcat);

// console.log(numbers.join(' '));
// console.log(numbers.join('.'));

// destr
// före e6
// console.log(numbers[0]);
// console.log(numbers[3]);
// console.log(numbers[5]);

// med e6

const [bengan, y, ali, m] = numbers;
// console.log(bengan, y, m);

const [first, last] = numbers;

// console.log(first, last);

// nästlade listor / arrayer...
const nestedArray = [3, 4, [1, 2, [5, 6]]];
// console.log(nestedArray);

const [x, z, [a, b, [,]]] = nestedArray;
// console.log(x);
// console.log(z);
// console.log(a);
// console.log(b);

const car = {
    id: 1,
    regNo: 'ABC 123',
    manufacor: 'Volvo',
    model: 'XC60',
    milage: '10000',
    modelYear: 2020
};
const { regNo, manufacor, model } = car;
console.log(regNo, manufacor, model);

