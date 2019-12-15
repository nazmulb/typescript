function printLabel(labelObj) {
    console.log(labelObj.label);
}
var myObj = { size: 10, label: "Size 10 object" };
printLabel(myObj);
function createSquare(config) {
    var newSquare = { color: "white", area: 100 };
    if (config.color) {
        newSquare.color = config.color;
    }
    if (config.width) {
        newSquare.area = config.width * config.width;
    }
    return newSquare;
}
console.dir(createSquare({ color: "balck" }));
console.dir(createSquare({}));
console.dir(createSquare({ width: 20 }));
console.dir(createSquare({ width: 50, color: "yellow" }));
var p1 = { x: 10, y: 20 };
var mySearch;
mySearch = function (source, subString) {
    var result = source.search(subString);
    return result > -1;
};
console.log(mySearch("My name is Nazmul", "name"));
