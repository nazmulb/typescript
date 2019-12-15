// Array destructuring
var input = [1, 2];
var first = input[0], second = input[1];
console.log(second);
function f(_a) {
    var first = _a[0], second = _a[1];
    console.log(first);
}
f([5, 7]);
// Object destructuring
var obj = {
    fname: "Nazmul",
    lname: "Basher",
    age: 37,
    city: "Dhaka"
};
var fname = obj.fname, age = obj.age;
console.log(age);
// Property renaming
var lastName = obj.lname, homeTown = obj.city;
console.log(homeTown);
