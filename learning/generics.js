function identity(arg) {
    return arg;
}
console.log(identity("Nazmul"));
let myIdentity = identity;
// Generic Classes
class GenericNumber {
}
let myGenericNumber = new GenericNumber();
myGenericNumber.zeroValue = 0;
myGenericNumber.add = function (x, y) { return x + y; };
console.log(myGenericNumber.add(2, 3));
let stringNumeric = new GenericNumber();
stringNumeric.zeroValue = "";
stringNumeric.add = function (x, y) { return x + y; };
console.log(stringNumeric.add(stringNumeric.zeroValue, "Nazmul"));
function loggingIdentity(arg) {
    console.log(arg.length);
    return arg;
}
loggingIdentity("Nazmul");
// loggingIdentity(3) // error: number doesn't have a .length property
loggingIdentity({ length: 10, value: 3 });
// Using Type Parameters in Generic Constraints
function getProperty(obj, key) {
    return obj[key];
}
let arr = { a: 1, b: 2, c: 3, d: 4 };
console.log(getProperty(arr, "a"));
// console.log(getProperty(x, "m")); // error: Argument of type 'm' isn't assignable to 'a' | 'b' | 'c' | 'd'.
