console.log("Hello Array side!!!");
// Arrayer
const numbers = [];
console.log(numbers);

const names = new Array();
console.log(names);

const numbers2 = [1, 2, 3, 5, 8, 9, 11];
console.log(numbers2);

const names2 = new Array("Ali", "Zahra");
console.log(names2);

const mixedList = [1, "Ali", true, { id: 1, name: "Zahra" }];
console.log(mixedList);

// Arbeta med Arrayer
console.log(numbers2.length + " stk finns i lista nr2"); //visar antal element

console.log(numbers2[5] + " ligger i position 6 i nr2 lista");

// plockar ut sista elementet
console.log(names2[names2.length - 1] + " är den sista i names 2 listan");
console.log(
  names2.at(-1) + " är den sista i names 2 listan men mer modarnt sätt",
);

numbers.push(50);
console.log(numbers2);
console.log(numbers2.pop());
console.log(numbers2);

console.log(numbers2.unshift(500), numbers2);

const animals = ["Zibra", "Apa", "Tiger", "Antilop"];
console.log(animals);
console.log(animals.sort());

console.log(animals.includes("Apa"));

console.log(animals.indexOf("Zibra"));

const newAnimals = animals.slice(0, 3);
console.log(newAnimals);

// spread operator
const copyOfAnimals = [...animals];
console.log(copyOfAnimals);
// const deletedAnimals = animals.splice(1, 2);
// console.log(deletedAnimals);
// console.log(animals);


