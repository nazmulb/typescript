class Greeter {
    constructor(message) {
        this.greeting = message;
    }
    greet() {
        return "Hello, " + this.greeting;
    }
}
let g = new Greeter("Nazmul");
console.log(g.greet());
// Inheritance
class Animal {
    constructor(theName) {
        this.name = theName;
    }
    move(distanceInMeters = 0) {
        console.log(`${this.name} moved ${distanceInMeters}m.`);
    }
}
class Snake extends Animal {
    move(distanceInMeters = 5) {
        console.log("Slithering...");
        super.move(distanceInMeters);
    }
}
class Horse extends Animal {
    move(distanceInMeters = 45) {
        console.log("Galloping...");
        super.move(distanceInMeters);
    }
}
const sam = new Snake("Sammy the Python");
let tom = new Horse("Tommy the Palomino");
sam.move();
tom.move(34);
// Understanding protected
class Man {
    constructor(name) {
        this.name = name;
    }
}
class Employee extends Man {
    constructor(name, department) {
        super(name);
        this.department = department;
    }
    getElevatorPitch() {
        return `Hello, my name is ${this.name} and I work in ${this.department}.`;
    }
}
let emp = new Employee("Nazmul", "Software Engineering");
console.log(emp.getElevatorPitch());
// console.log(emp.name); // error
// let m1 = new Man("Basher"); // error: The 'Man' constructor is protected
// Accessors
const fullNameMaxLength = 20;
class Employees {
    get fullName() {
        return this._fullName;
    }
    set fullName(newName) {
        if (newName && newName.length > fullNameMaxLength) {
            throw new Error(`fullName has a max length of ${fullNameMaxLength}`);
        }
        this._fullName = newName;
    }
}
let emp1 = new Employees();
emp1.fullName = "Nazmul Basher";
if (emp1.fullName) {
    console.log(emp1.fullName);
}
// Abstract Classes
class Department {
    constructor(name) {
        this.name = name;
    }
    printName() {
        console.log(`Department name: ${this.name}`);
    }
}
class AccointingDepartment extends Department {
    constructor() {
        super("Accounting and Auditing");
    }
    printMeeting() {
        console.log("The Accounting Department meets each Monday at 10am.");
    }
    generateReports() {
        console.log("Generating accounting reports...");
    }
}
let dept;
// dept = new Department(); // error: cannot create an instance of an abstract class
dept = new AccointingDepartment();
dept.printName();
dept.printMeeting();
// dept.generateReports(); // error: method doesn't exist on declared abstract type
