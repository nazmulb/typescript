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