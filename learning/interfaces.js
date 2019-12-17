function printLabel(labelObj) {
    console.log(labelObj.label);
}
let myObj = { size: 10, label: "Size 10 object" };
printLabel(myObj);
function createSquare(config) {
    let newSquare = { color: "white", area: 100 };
    if (config.color) {
        newSquare.color = config.color;
    }
    if (config.width) {
        newSquare.area = config.width * config.width;
    }
    return newSquare;
}
console.dir(createSquare({ color: "balck" }));
console.dir(createSquare({}));
console.dir(createSquare({ width: 20 }));
console.dir(createSquare({ width: 50, color: "yellow" }));
let p1 = { x: 10, y: 20 };
let mySearch;
mySearch = function (source, subString) {
    let result = source.search(subString);
    return result > -1;
};
console.log(mySearch("My name is Nazmul", "name"));
let myArray;
myArray = ["Nazmul", "Basher"];
console.log(myArray[1]);
class Clock {
    constructor(h, m) {
        this.currentTime = new Date();
    }
    setTime(d) {
        this.currentTime = d;
    }
}
let square = {};
square.color = "white";
square.penWidth = 10;
square.sideLength = 5.0;
console.dir(square);
