function n() {
    console.log("n(): evaluated");
    return function (target: any, propertyKey: string, descriptor: PropertyDescriptor) {
        console.log("n(): called");
    }
}

function h() {
    console.log("h(): evaluated");
    return function (target: any, propertyKey: string, descriptor: PropertyDescriptor) {
        console.log("h(): called");
    }
}

class C {
    @n()
    @h()
    method() {
        console.log("method() called");
    }
}

let c1 = new C();
c1.method();

// Method Decorators
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/defineProperty
class Greeter2 {
    greeting: string;
    constructor(message: string) {
        this.greeting = message;
    }

    @enumerable(false)
    greet() {
        return "Hello, " + this.greeting;
    }
}

function enumerable(value: boolean) {
    return function(target: any, propertyKey: string, descriptor: PropertyDescriptor) {
        descriptor.enumerable = value;
    }
}

let g2 = new Greeter2("Nazmul");
console.log(g2.greet());

// Accessor Decorators
class Point2 {
    private _x: number;
    private _y: number;
    constructor(x: number, y: number) {
        this._x = x;
        this._y = y;
    }

    @configurable(false)
    get x() { return this._x; }

    @configurable(false)
    get y() { return this._y; }
}

function configurable(value: boolean) {
    return function(target: any, propertyKey: string, descriptor: PropertyDescriptor) {
        descriptor.configurable = value;
    }
}