function identity<T>(arg: T): T {
    return arg;
}

console.log(identity<string>("Nazmul"));

// Generic Interface
interface GenericIdentityFn {
    <T>(arg: T): T;
}

let myIdentity: GenericIdentityFn = identity;

// Generic Classes
class GenericNumber<T> {
    zeroValue: T;
    add: (x: T, y: T) => T;
}

let myGenericNumber = new GenericNumber<number>();
myGenericNumber.zeroValue = 0;
myGenericNumber.add = function(x, y) { return x + y; };

console.log(myGenericNumber.add(2, 3));

let stringNumeric = new GenericNumber<string>();
stringNumeric.zeroValue = "";
stringNumeric.add = function(x, y) { return x + y; };

console.log(stringNumeric.add(stringNumeric.zeroValue, "Nazmul"));

// Generic Constraints
interface Lenghtwise {
    length: number;
}

function loggingIdentity<T extends Lenghtwise>(arg: T): T {
    console.log(arg.length);

    return arg;
}

loggingIdentity("Nazmul");
// loggingIdentity(3) // error: number doesn't have a .length property
loggingIdentity({length: 10, value: 3});

// Using Type Parameters in Generic Constraints
function getProperty<T, K extends keyof T>(obj: T, key: K) {
    return obj[key];
}

let arr = { a: 1, b: 2, c: 3, d: 4 };

console.log(getProperty(arr, "a"));
// console.log(getProperty(x, "m")); // error: Argument of type 'm' isn't assignable to 'a' | 'b' | 'c' | 'd'.
