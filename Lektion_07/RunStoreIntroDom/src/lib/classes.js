// E6 classer
// Syntactic sugar

class Person {
    #firstName;
    #lastName;
    #email;
    constructor(firstName, lastName, email) {
        this.#firstName = firstName;
        this.#lastName = lastName;
        this.#email = email;
    }

    get firstName() {
        return this.#firstName;
    }
    set firstName(name) {
        this.#firstName = this.#adjustName(name);
    }
    get lastName() {
        return this.#lastName;
    }
    set lastName(name) {
        this.#lastName = this.#adjustName(name);
    }
    get email() {
        return this.#email.toLowerCase();
    }
    getFullName() {
        return `${this.#firstName} ${this.#lastName}`;
    }

    #adjustName(value) {
        return value.charAt(0).toUpperCase() + value.slice(1);
    }

    static sayHello() {
        console.log('Hej på dig!');
    }
};

const person = new Person('Ali', 'Alhilo', 'Alhilo@email.com');
console.log(person);

console.log(person.email);
Person.sayHello();

class Student extends Person {
    #phone = '';
    #courses = [];
    constructor(firstName, lastName, email, phone) {
        super(firstName, lastName, email);
        this.#phone = phone;

    }

    get courses() {
        return this.#courses;
    }


    enrollCourse(course) {
        this.#courses.push(course);
    }

}
const student = new Student('Kalle', 'Nillson', 'Kalle@email.com', '071000000');

console.log(student);

student.enrollCourse('Javascript');
student.enrollCourse('C#');

console.log(student.courses);