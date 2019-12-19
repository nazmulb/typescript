var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
function n() {
    console.log("n(): evaluated");
    return function (target, propertyKey, descriptor) {
        console.log("n(): called");
    };
}
function h() {
    console.log("h(): evaluated");
    return function (target, propertyKey, descriptor) {
        console.log("h(): called");
    };
}
class C {
    method() {
        console.log("method() called");
    }
}
__decorate([
    n(),
    h(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], C.prototype, "method", null);
let c1 = new C();
c1.method();
// Method Decorators
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/defineProperty
class Greeter2 {
    constructor(message) {
        this.greeting = message;
    }
    greet() {
        return "Hello, " + this.greeting;
    }
}
__decorate([
    enumerable(false),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], Greeter2.prototype, "greet", null);
function enumerable(value) {
    return function (target, propertyKey, descriptor) {
        descriptor.enumerable = value;
    };
}
let g2 = new Greeter2("Nazmul");
console.log(g2.greet());
// Accessor Decorators
class Point2 {
    constructor(x, y) {
        this._x = x;
        this._y = y;
    }
    get x() { return this._x; }
    get y() { return this._y; }
}
__decorate([
    configurable(false),
    __metadata("design:type", Object),
    __metadata("design:paramtypes", [])
], Point2.prototype, "x", null);
__decorate([
    configurable(false),
    __metadata("design:type", Object),
    __metadata("design:paramtypes", [])
], Point2.prototype, "y", null);
function configurable(value) {
    return function (target, propertyKey, descriptor) {
        descriptor.configurable = value;
    };
}
