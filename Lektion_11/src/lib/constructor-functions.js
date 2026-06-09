function Vehicle(make, model) {
  this.id = 1;
  this.manufacturer = make;
  this.model = model;
}

Vehicle.prototype.break = function () {
  return `${this.model} bromsar för glatta livet`;
};
const volvo = new Vehicle('Fiat', 'Uno');

console.log(volvo);
console.log(volvo.break());
