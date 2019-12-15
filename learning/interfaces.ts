// Our First Interface
interface LabelValue {
    label: string;
}

function printLabel(labelObj: LabelValue) {
    console.log(labelObj.label);
}

let myObj = {size: 10, label: "Size 10 object"};
printLabel(myObj);


// Optional Properties
interface SquareConfig {
    color?: string;
    width?: number;
}

function createSquare(config: SquareConfig): {color: string, area: number} {
    let newSquare = {color: "white", area: 100};

    if(config.color) {
        newSquare.color = config.color;
    }

    if(config.width) {
        newSquare.area = config.width * config.width;
    }

    return newSquare;
}

console.dir(createSquare({color: "balck"}));
console.dir(createSquare({}));
console.dir(createSquare({width: 20}));
console.dir(createSquare({width: 50, color: "yellow"}));

// Readonly properties
interface Point {
    readonly x: number;
    readonly y: number;
}

let p1: Point = {x: 10, y: 20};
// p1.x = 30;

// Function Types
interface SearchFunc {
    (source: string, subString: string): boolean;
}

let mySearch: SearchFunc;

mySearch = function(source: string, subString: string): boolean {
    let result = source.search(subString);

    return result > -1;
}

console.log(mySearch("My name is Nazmul", "name"));

// Indexable Types
interface StringArray {
    [index: number]: string;
}

let myArray: StringArray;
myArray = ["Nazmul", "Basher"];

console.log(myArray[1]);

// Class Types
interface ClockInterface {
    currentTime: Date;
    setTime(d: Date): void;
}

class Clock implements ClockInterface {
    currentTime: Date = new Date();

    setTime(d: Date): void {
        this.currentTime = d;
    }

    constructor(h: number, m: number) {}
}

// Extending Interfaces
interface Shape {
    color: string;
}

interface PenStroke {
    penWidth: number;
}

interface Square extends Shape, PenStroke {
    sideLength: number;
}

let square = {} as Square;
square.color = "white";
square.penWidth = 10;
square.sideLength = 5.0;

console.dir(square);