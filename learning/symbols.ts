// Symbols are immutable, and unique.
let sym2 = Symbol("key");
let sym3 = Symbol("key");

console.log(sym2 === sym3);

const sym = Symbol();

let obj2 = {
    [sym]: "Nazmul"
};

console.log(obj2[sym]);