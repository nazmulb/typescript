let myAdd = function (x, y) {
    return x + y;
};
console.log(myAdd(2, 3));
// Optional Parameters
function buildName(firstName, lastname) {
    if (lastname)
        return firstName + " " + lastname;
    return firstName;
}
console.log(buildName("Nazmul"));
console.log(buildName("Nazmul", "Basher"));
// Rest Parameters
function buildNames(firstName, ...restOfName) {
    return firstName + " " + restOfName.join(" ");
}
console.log(buildNames("Md", "Nazmul", "Basher", "Rony"));
