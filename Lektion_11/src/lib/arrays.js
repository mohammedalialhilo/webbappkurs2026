/* 
    Arrayer är en grundläggande datatyp i JavaScript...
*/

// 1.
const numbers = [];
// 2.
const names = new Array();
// 3.
const numbers2 = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// 4.
const names2 = new Array('Michael', 'Eva', 'Lars');
// 5.
const mixedList = [1, 'Kalle', true, { id: 1, name: 'Nisse' }];

// Arbeta med arrayer...
// console.log(numbers.length); // Visar antalet element i en lista
// console.log(names.length); // Visar antalet element i en lista
// console.log(numbers2.length); // Visar antalet element i en lista
// console.log(names2.length); // Visar antalet element i en lista
// console.log(mixedList.length); // Visar antalet element i en lista

// Plocka ut element ur en array...
// console.log(numbers2[1]);
// console.log(mixedList[1]);

// Plocka ut sista elementet ur en array...
// Det gamla sättet...
// console.log(names2.length);
// console.log(names2[names2.length - 1]);

// Det moderna sättet...
// console.log(names2.at(-1));
// console.log(names2.at(-2));
// console.log(names2.at(0));
// console.log(names2.at(1));

// Lägga till element i arrayer...
// push lägger alltid till ett nytt element i slutet(sist) i en array

/* numbers.push(10);
console.log(numbers);
numbers.push(20);
console.log(numbers);

mixedList.push({ id: 2, name: 'Susanne' });
console.log(mixedList);

mixedList.unshift({ id: 3, product: { name: 'Sko', inStock: true } });
console.log(mixedList); */

// Plocka ut element ur en array...
// Plocka sista elementet...
// console.log(mixedList.pop());
// console.log(mixedList);
// Plocka första elementet...
// console.log(mixedList.shift());
// console.log(mixedList);

console.log(numbers2);
console.log(numbers2.reverse());

// Sortering av arrayer...
const animals = ['Zebra', 'Apa', 'Tiger', 'Antilop'];
console.log(animals);
console.log(animals.sort());

// Kontrollera om ett element existerar i en array...
console.log(animals.includes('Apa'));

// Ta reda på ett elements position(index) i en array...
console.log(animals.indexOf('Antilop'));

// Skapa ny array ifrån en befintlig array...
// slice()
const newAnimals = animals.slice();
console.log(newAnimals);

// Ett mer modernt sätt att kopiera en array...
// spread operatorn...
const copyOfAnimals = [...animals];
console.log('Copy Of Animals', copyOfAnimals);
console.log('Original Animals', animals);

const newAnimals2 = animals.slice(1);
console.log(newAnimals2);

const newAnimals3 = animals.slice(1, 3);
console.log(newAnimals3);

// Ta bort ett element ur en array...
// splice(), tar bort ett eller flera element baserat på argument...
/* const deletedAnimals = animals.splice(0);
console.log(animals);
console.log(deletedAnimals); */
const deletedAnimals = animals.splice(2, 1);
console.log(animals);
console.log(deletedAnimals);
