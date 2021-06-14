// let obj1 = {};

// obj1["name"] = "My Object";
// console.log(obj1);

// // let student = {
// //     name: "Bob",
// //     age: 22,
// //     address: {
// //         street: "123 Any Street",
// //         state: "NSW",
// //         city: "Sydney"
// //     }
// // }

// // console.log(student.address["city"])

// // constructor function
// function Person(name, age) {
//   this.name = name;
//   this.age = age;
//   this.awesome = true;
// }

// Person.prototype.country = "Australia";

// let student = new Person("Sarah", 24);
// let student2 = new Person("John", 35);
// Person.prototype.country = "Russia";
// console.log(student.country);
// console.log(student2.country);

// function Hero(name, level) {
//   this.name = name;
//   this.level = level;
// }

// Hero.prototype.shout = function () {
//   return `My name is ${this.name}!!!`;
// };

// let conan = new Hero("Conan", 100);
// let batman = new Hero("Batman", 60);
// console.log(conan.shout());
// console.log(batman.shout());


// class Triangle {

// }

// let triangle = new Triangle()
// console.log(triangle)


class Rectangle {
    units = "cm"

    constructor(height, width) {
        this.height = height
        this.width = width
        this.type = "rectangle"
    }

    area() {
        return this.width * this.height
    }

    talk() {
        return `I am a ${this.type}`
    }
}

class Square extends Rectangle {
    constructor(size=10) {
        super(size, size)
        this.type = "square"
    }
}

let r = new Rectangle(20, 10)
let s = new Square()
console.log(r.talk())
console.log(s.talk())
