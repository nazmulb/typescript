
// Array
let color: string[] = ["Red", "Green", "Blue"];
let list: number[] = [1, 2, 3];

console.dir(color);

// Tuple
let x: [string, number] = ["Nazmul", 37];
let y: [string, number, string, number] = ["Nazmul", 37, "Nabil", 10];

console.dir(y);

// Enum
enum Color {Red, Green, Yellow};
let c: Color = Color.Yellow;
let colorName: string = Color[1];

console.log(c);
console.log(colorName);

// Any
let notSure: any = 1;
notSure = "This is string";
notSure = true;

console.log(notSure);

// Array Any
let list1: any[] = ["Nazmul", 37, true];
list1[2] = 12.56;
list1[3] = false;

console.dir(list1);

// Void
let unusable: void = undefined;
console.dir(typeof(unusable));
unusable = null;
console.dir(typeof(unusable));

// Type assertions
let someValue: any = "This is a test";
let strLength:number = (someValue as string).length;

console.log(strLength);