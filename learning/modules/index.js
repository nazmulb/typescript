"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const ZCV = require("./ZipCodeValidator");
const AllValidators_1 = require("./AllValidators");
let myZCV = new ZCV.ZipCodeValidator();
console.log(myZCV.isAcceptable("Nazmul"));
let zcv1 = new AllValidators_1.ZipCodeValidator();
console.log(zcv1.isAcceptable("12030"));
