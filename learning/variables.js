// Array
let color = ["Red", "Green", "Blue"];
let list = [1, 2, 3];
console.dir(color);
// Tuple
let x = ["Nazmul", 37];
let y = ["Nazmul", 37, "Nabil", 10];
console.dir(y);
// Enum
var Color;
(function (Color) {
    Color[Color["Red"] = 0] = "Red";
    Color[Color["Green"] = 1] = "Green";
    Color[Color["Yellow"] = 2] = "Yellow";
})(Color || (Color = {}));
;
let c = Color.Yellow;
let colorName = Color[1];
console.log(c);
console.log(colorName);
// Any
let notSure = 1;
notSure = "This is string";
notSure = true;
console.log(notSure);
// Array Any
let list1 = ["Nazmul", 37, true];
list1[2] = 12.56;
list1[3] = false;
console.dir(list1);
// Void
let unusable = undefined;
console.dir(typeof (unusable));
unusable = null;
console.dir(typeof (unusable));
// Type assertions
let someValue = "This is a test";
let strLength = someValue.length;
console.log(strLength);
