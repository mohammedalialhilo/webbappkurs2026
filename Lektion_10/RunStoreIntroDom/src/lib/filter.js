console.log(products);

// iterera igenom en array
// for i loopen .........
// for (let i = 0; i < products.length; i++) {
//   console.log(products[i].name);
// }

// // for of loopen.....
// for (let product of products) {
//   console.log(product.name + " " + product.price);
// }

// foreach loopen..........
// products.forEach((product) => {
//   console.log(product.name, product.imageUrl);
// });

// products.forEach((product, index) => {
//   console.log(index);
//   console.log(product.name, product.imageUrl);
// });

// map => iteration av en lista(array)
// const filteredProduct = products.map((product) => {
//   return {
//     uniqeId: product.id,
//     productName: product.name,
//     image: product.imageUrl,
//   };
// });
// console.log(filteredProduct);

// filtrera en array
// filter fynktionen Array.filter() tar ett predicate(vilkor och en funktion)
const filter1 = products.filter((product) => product.price < 1000);
console.log(filter1);

const filter2 = products.filter((product) => product.price > 1000);
console.log(filter2);

const filter3 = products.filter(
  (product) => product.price > 1500 && product.supplierName === "Company",
);
console.log(filter3);
