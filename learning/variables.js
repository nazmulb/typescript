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
