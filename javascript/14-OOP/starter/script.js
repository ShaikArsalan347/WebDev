// // "use strict";
// // const Person = function (firstName, birthYear) {
// //   this.firstName = firstName;
// //   this.birthYear = birthYear;
// // };
// // const arsalan = new Person("Arsalan", 2008);
// // const ayub = new Person("Ayub", 2005);
// // console.log(arsalan, ayub);
// // Person.Hey = function () {
// //   console.log(`hey there 👋`);
// //   console.log(this);
// // };

// // Person.Hey();
// // const ayaz = new Person("Ayaz", 2010);
// // const azra = new Person("Azra", 2012);
// // console.log(ayaz, azra);
// // console.log(Person.prototype);
// // Person.prototype.calcAge = function () {
// //   console.log(2024 - this.birthYear);
// // };
// // arsalan.calcAge();
// // // const Car = function (make, speed) {
// // //   this.make = make;
// // //   this.speed = speed;
// // // };
// // // Car.prototype.accelerate = function () {
// // //   this.speed += 10;
// // //   console.log(`${this.make} is going at ${this.speed} km/h`);
// // // };
// // // Car.prototype.brake = function () {
// // //   this.speed -= 5;
// // //   console.log(`${this.make} is going at ${this.speed} km/h`);
// // // };
// // // const bmw = new Car("BMW", 150);
// // // const Audi = new Car("AUDI", 180);
// // // bmw.accelerate();
// // // Audi.accelerate();
// // // bmw.brake();
// // // Audi.brake();

// // class PersoncCl {
// //   constructor(fullName, birthYear) {
// //     this.fullName = fullName;
// //     this.birthYear = birthYear;
// //   }
// //   calcAge() {
// //     console.log(2025 - this.birthYear);
// //   }

// //   get age() {
// //     return 2025 - this.birthYear;
// //   }
// //   set fullName(name) {
// //     if (name.includes(" ")) this._fullName = name;
// //     else alert(`${name} is not a full name!`);
// //   }
// //   get fullName() {
// //     return this._fullName;
// //   }
// // }
// // const Arsalan = new PersoncCl("shaik arsalan", 2008);
// // const Ayub = new PersoncCl(" ayub", 2005);
// // console.log(Arsalan);
// // Arsalan.calcAge();
// // console.log(Arsalan.age);
// // const account = {
// //   owner: arsalan,
// //   movement: [222, 300, 5000, 600],
// //   get letest() {
// //     return this.movement.slice(-1);
// //   },
// //   set letest(mov) {
// //     account.movement.push(mov);
// //   },
// // };
// // console.log(account.letest);
// // account.letest = 700;
// // console.log(account.movement);
// // class vachile {
// //   constructor(make, speed) {
// //     this.make = make;
// //     this.speed = speed;
// //   }
// //   accelerate() {
// //     this.speed += 10;
// //     console.log(`${this.make} is going at ${this.speed} km/h`);
// //   }
// //   brake() {
// //     this.speed -= 5;
// //     console.log(`${this.make} is going at ${this.speed} km/h`);
// //   }
// //   static Hey() {
// //     console.log(`hey there 👋`);
// //   }
// // }

// // const RR = new vachile("RR", 200);
// // const GW = new vachile("GW", 160);
// // console.log(RR, GW);
// // RR.accelerate(), GW.accelerate();
// // RR.brake(), GW.brake();
// // vachile.Hey();
// // const PersonProto = {
// //   calcAge() {
// //     console.log(2024 - this.birthYear);
// //     console.log(this);
// //   },
// //   inti(firstName, birthYear) {
// //     this.firstName = firstName;
// //     this.birthYear = birthYear;
// //   },
// // };
// // const arsalan = Object.create(PersonProto);
// // console.log(arsalan);
// // arsalan.name = "arsalan";
// // arsalan.birthYear = 2008;
// // arsalan.calcAge();
// // console.log(arsalan.__proto__ === PersonProto);
// // const ayub = Object.create(PersonProto);
// // ayub.inti("ayub", 2005);
// // ayub.calcAge();
// class Car {
//   constructor(make, speed) {
//     this.make = make;
//     this.speed = speed;
//   }
//   accelerate() {
//     this.speed += 10;
//     console.log(`${this.make} is going at ${this.speed} km/h`);
//   }
//   brake() {
//     this.speed -= 5;
//     console.log(`${this.make} is going at ${this.speed} km/h`);
//   }
//   get speedUS() {
//     return this.speed / 1.6;
//   }
//   set speedUS(speed) {
//     return (this.speed = speed * 1.6);
//   }
// }
// const ford = new Car("ford", 120);
// console.log(ford.speedUS);
// ford.accelerate();
// ford.brake();
// ford.speedUS = 50;
// console.log(ford);

//////////////////////////////
// Inheritance Between "Classes": Constructor Functions

// const Person = function (firstName, birthYear) {
//   this.firstName = firstName;
//   this.birthYear = birthYear;
// };
// Person.prototype.calcAge = function () {
//   console.log(2024 - this.birthYear);
// };
// const student = function (firstName, birthYear, course) {
//   Person.call(this, firstName, birthYear);
//   console.log(this);
//   this.course = course;
// };
// student.prototype = Object.create(Person.prototype);
// student.prototype.intrduce = function () {
//   console.log(`my name is ${this.firstName} and I study ${this.course}`);
// };
// const mike = new student("mike", 2015, "computer scince");
// mike.intrduce();
// mike.calcAge();
// console.log(mike.__proto__);
// console.log(mike.__proto__.__proto__);
// student.prototype.constructor = student;
// console.dir(student.prototype.constructor);
// const Car = function (make, speed) {
//   this.make = make;
//   this.speed = speed;
// };
// Car.prototype.accelerate = function () {
//   this.speed += 10;
//   console.log(`${this.make} is going at ${this.speed} km/h`);
// };
// Car.prototype.brake = function () {
//   this.speed -= 5;
//   console.log(`${this.make} is going at ${this.speed} km/h`);
// };

// const EV = function (make, speed, charge) {
//   Car.call(this, make, speed);
//   this.charge = charge;
// };
// EV.prototype = Object.create(Car.prototype);

// EV.prototype.chargeBattery = function (chargeTO) {
//   this.charge = chargeTO;
// };

// EV.prototype.accelerate = function () {
//   this.speed += 20;
//   this.charge -= 1;
//   console.log(
//     `${this.make} going at ${this.speed}km/h, with a charge of ${this.charge}%`
//   );
// };
// const tesla = new EV("Tesla", 120, 23);
// tesla.chargeBattery(90);
// console.log(tesla);
// tesla.brake();
// tesla.accelerate();
// class PersoncCl {
//   constructor(fullName, birthYear) {
//     this.fullName = fullName;
//     this.birthYear = birthYear;
//   }
//   calcAge() {
//     console.log(2025 - this.birthYear);
//   }

//   get age() {
//     return 2025 - this.birthYear;
//   }
//   set fullName(name) {
//     if (name.includes(" ")) this._fullName = name;
//     else alert(`${name} is not a full name!`);
//   }
//   get fullName() {
//     return this._fullName;
//   }
//   static Hey() {
//     console.log(`hey there 👋`);
//   }
// }
// class studentCl extends PersoncCl {
//   constructor(fullName, birthYear, course) {
//     super(fullName, birthYear);
//     this.course = course;
//   }
//   intrduce() {
//     console.log(`my name is ${this.fullName} and I study ${this.course}`);
//   }
//   calcAge() {
//     `i am ${
//       2024 - this.birthYear
//     } year old, but as a student i feel more like ${2034 - this.birthYear}`;
//   }
// }
// const martha = new studentCl(" shaik martha", 2012, "computer science");
// martha.intrduce();
// martha.calcAge();
// class account {
//   constructor(owner, pin, currency) {
//     this.owner = owner;
//     this.pin = pin;
//     this.currency = currency;
//     this.movement = [];
//     this.locale = navigator.language;
//     console.log(`thanks for opening an account,${owner}`);
//   }
//   deposit(val) {
//     this.movement.push(val);
//   }
//   withdraw(val) {
//     this.deposit(-val);
//   }
//   approveLoan(val) {
//     return true;
//   }
//   requestLoan(val) {
//     if (this.approveLoan(val)) {
//     }
//   }
// }
// const acc1 = new account("arsalan", 1111, "INR");
// acc1.withdraw(200);
// acc1.deposit(100);
// console.log(acc1);
/////////////////////////////
// Encapsulation: private Class Fields and Methods
// 1) public fields
// 2) private fiels
// 3) public methods
// 4) private methods
// static version of ther 4
// class account {
//   locale = navigator.language;
//   bank = "bankist";
//   #movements = [];
//   #pin;
//   constructor(owner, pin, currency) {
//     this.owner = owner;
//     this.#pin = pin;
//     currency = currency;
//     console.log(`thanks for opening an account,${owner}`);
//   }
//   getMovements() {
//     return this.#movements;
//   }
//   deposit(val) {
//     this.#movements.push(val);
//     return this;
//   }
//   withdraw(val) {
//     this.deposit(-val);
//     return this;
//   }
//   approveLoan(val) {
//     return true;
//   }
//   requestLoan(val) {
//     if (this.approveLoan(val)) {
//       this.deposit(val);
//       console.log(`Loan approved`);
//     }
//     return this;
//   }
// }
// const acc1 = new account("arsalan", 1111, "INR");
// acc1.deposit(100);
// acc1.withdraw(100);
// console.log(acc1);
// console.log(acc1.getMovements());

// const movements = acc1.withdraw(1000).deposit(100).withdraw(100).deposit(20000);
// console.log(movements);
class CarCl {
  constructor(make, speed) {
    this.make = make;
    this.speed = speed;
  }
  accelerate() {
    this.speed += 10;
    console.log(`${this.make} is going at ${this.speed} km/h`);
  }
  brake() {
    this.speed -= 5;
    console.log(`${this.make} is going at ${this.speed} km/h`);
    return this;
  }
}
class EVCl extends CarCl {
  #charge;
  constructor(make, speed, charge) {
    super(make, speed);
    this.#charge = charge;
  }

  chargeBattery(chargeTO) {
    this.#charge = chargeTO;
    return this;
  }

  accelerate() {
    this.speed += 20;
    this.#charge -= 1;
    console.log(
      `${this.make} going at ${this.speed}km/h, with a charge of ${
        this.#charge
      }%`
    );
    return this;
  }
}
const rivian = new EVCl("Rivian", 120, 23);
console.log(rivian);
rivian.accelerate().accelerate().brake().brake().chargeBattery(40);
