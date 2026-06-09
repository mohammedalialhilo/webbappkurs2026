console.log(products);

// find är en funktion på en array som plockar ut ett element
// baserat på ett predicate(villkor)...

const product = products.find((product) => product.itemNumber === '1002');
console.log(product);

const product1 = products.find((product) => product.supplierName === 'Company');
console.log(product1);

console.log(products);
