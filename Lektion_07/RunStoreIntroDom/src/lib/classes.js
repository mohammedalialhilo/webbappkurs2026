// E6 classer
// Syntactic sugar

class Person {
    #firstName;
    #lastName;
    constructor() {
        this.#firstName = 'Ali';
        this.#lastName = 'Alhilo';
    }

    get firstName() {
        return this.#firstName;
    }
    get lastName() {
        return this.#lastName;
    }
    set lastName(lastName) {
        this.#lastName = this.#adjustName(name);
    }
    getFullName() {
        return `${this.#firstName} ${this.#lastName}`;
    }

    #adjustName(value) {
        return value.charAt(0).toUpperCase() + value.slice(1);
    }
};

const ali = new Person();
console.log(ali);
console.log(ali.firstName);

ali.lastName = 'mohammed';
console.log(ali.lastName);

console.log(ali.getFullName());

