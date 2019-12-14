
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