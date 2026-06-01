function Vehicle(make, model) {
    this.id = 1;
    this.manufactur = make;
    this.model = model;

}

Vehicle.prototype.milage = 10000;

Vehicle.prototype.break = function () {
    return `${this.model} är modelen`;
};
const volvo = new Vehicle('Fiat', 'Uno');
console.log(volvo);
console.log(volvo.break());