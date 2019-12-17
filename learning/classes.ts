class Greeter {
    greeting: string;

    constructor(message: string) {
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
    private name: string;

    constructor(theName: string) {
        this.name = theName;
    }

    move(distanceInMeters: number = 0) {
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
let tom: Animal = new Horse("Tommy the Palomino");
sam.move();
tom.move(34);

// Understanding protected
class Man {
    protected name: string;
    protected constructor(name: string) {
        this.name = name;
    }
}

class Employee extends Man {
    private department: string;

    constructor(name: string, department: string) {
        super(name);
        this.department = department;
    }

    public getElevatorPitch() {
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
    private _fullName: string;

    get fullName(): string {
        return this._fullName;
    }

    set fullName(newName: string) {
        if(newName && newName.length > fullNameMaxLength) {
            throw new Error(`fullName has a max length of ${fullNameMaxLength}`);
        }
        
        this._fullName = newName;
    }
}

let emp1 = new Employees();
emp1.fullName = "Nazmul Basher";
if(emp1.fullName) {
    console.log(emp1.fullName);
}

// Abstract Classes
abstract class Department {
    constructor(public name: string) {

    }

    printName(): void {
        console.log(`Department name: ${this.name}`);
    }

    abstract printMeeting(): void;
} 

class AccointingDepartment extends Department {
    constructor() {
        super("Accounting and Auditing");
    }

    printMeeting(): void {
        console.log("The Accounting Department meets each Monday at 10am.");
    }

    generateReports(): void {
        console.log("Generating accounting reports...");
    }
}

let dept: Department;
// dept = new Department(); // error: cannot create an instance of an abstract class
dept = new AccointingDepartment();
dept.printName();
dept.printMeeting();
// dept.generateReports(); // error: method doesn't exist on declared abstract type