// Array
var color = ["Red", "Green", "Blue"];
var list = [1, 2, 3];
console.dir(color);
// Tuple
var x = ["Nazmul", 37];
var y = ["Nazmul", 37, "Nabil", 10];
console.dir(y);
// Enum
var Color;
(function (Color) {
    Color[Color["Red"] = 0] = "Red";
    Color[Color["Green"] = 1] = "Green";
    Color[Color["Yellow"] = 2] = "Yellow";
})(Color || (Color = {}));
;
var c = Color.Yellow;
var colorName = Color[1];
console.log(c);
console.log(colorName);
// Any
var notSure = 1;
notSure = "This is string";
notSure = true;
console.log(notSure);
// Array Any
var list1 = ["Nazmul", 37, true];
list1[2] = 12.56;
list1[3] = false;
console.dir(list1);
// Void
var unusable = undefined;
console.dir(typeof (unusable));
unusable = null;
console.dir(typeof (unusable));
// Type assertions
var someValue = "This is a test";
var strLength = someValue.length;
console.log(strLength);
