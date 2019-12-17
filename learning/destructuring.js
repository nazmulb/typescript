// Array destructuring
let input = [1, 2];
let [first, second] = input;
console.log(second);
function f([first, second]) {
    console.log(first);
}
f([5, 7]);
// Object destructuring
let obj = {
    fname: "Nazmul",
    lname: "Basher",
    age: 37,
    city: "Dhaka"
};
let { fname, age } = obj;
console.log(age);
// Property renaming
let { lname: lastName, city: homeTown } = obj;
console.log(homeTown);
