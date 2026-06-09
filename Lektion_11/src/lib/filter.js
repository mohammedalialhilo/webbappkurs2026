/* Arbeta med arrayer */
console.log(products);

// iterera igenom en array...
// for i loopen...
/* for (let i = 0; i < products.length; i++) {
  console.log(products[i].name);
} */

// for of loopen...
/* for (let product of products) {
  console.log(product.name + ' ' + product.price);
} */

// forEach loopen
/* products.forEach((product) => {
  console.log(product.name, product.imageUrl);
});

products.forEach((product, index) => {
  console.log(product.name, product.imageUrl);
  console.log(index);
}); */

// map => iteration av en lista(array)
/* const filteredProducts = products.map((product) => {
  return {
    id: product.id,
    name: product.name,
    imageUrl: product.imageUrl,
  };
}); */

/* const filteredProducts = products.map((product) => {
  return {
    uniqueId: product.id,
    productName: product.name,
    image: product.imageUrl,
  };
});

console.log(filteredProducts); */

/* Filtrerera en array... */
// filter funktionen Array.filter() tar ett predicate(villkor men också en funktion)

const filter1 = products.filter((product) => product.price < 2000);
console.log(filter1);

const filter2 = products.filter((product) => product.price > 2000);
console.log(filter2);

const filter3 = products.filter(
  (product) => product.price > 2000 && product.supplierName === 'Company',
);
console.log(filter3);
