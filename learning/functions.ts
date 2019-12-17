let myAdd: (x: number, y: number) => number = function(x: number, y:number): number {
    return x + y;
}

console.log(myAdd(2, 3));

// Optional Parameters
function buildName(firstName: string, lastname?: string): string {
    if(lastname)
        return firstName + " " + lastname;

    return firstName;
}

console.log(buildName("Nazmul"));
console.log(buildName("Nazmul", "Basher"));

// Rest Parameters
function buildNames(firstName: string, ...restOfName: string[]): string {
    return firstName + " " + restOfName.join(" ");
}

console.log(buildNames("Md", "Nazmul", "Basher", "Rony"));