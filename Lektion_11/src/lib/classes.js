// E6 klasser...
/* Syntactic sugar */

class Person {
  // privata fält...
  #firstName = '';
  #lastName = '';
  #email = '';

  constructor(firstName, lastName, email) {
    this.#firstName = firstName;
    this.#lastName = lastName;
    this.#email = email;
  }
  //   getters...
  get firstName() {
    return this.#firstName;
  }
  set firstName(value) {
    this.#firstName = this.#adjustName(value);
  }

  get lastName() {
    return this.#lastName;
  }
  set lastName(value) {
    this.#lastName = this.#adjustName(value);
  }

  get email() {
    return this.#email.toLowerCase();
  }

  //   public metoder...
  getFullName() {
    return `${this.#firstName} ${this.#lastName}`;
  }

  #adjustName(value) {
    return value.charAt(0).toUpperCase() + value.slice(1);
  }

  static sayHello() {
    console.log('Hej på dig');
  }
}

const person = new Person('Nisse', 'Nilsson', 'Nils@mail.com');

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

const student = new Student(
  'Kalle',
  'Andersson',
  'kalle@mail.com',
  '123456789',
);
console.log(student);

student.enrollCourse('JavaScript');
student.enrollCourse('C# REST API');

console.log(student.courses);
