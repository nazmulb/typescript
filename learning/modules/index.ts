import * as ZCV from "./ZipCodeValidator";
import {ZipCodeValidator} from "./AllValidators";

let myZCV = new ZCV.ZipCodeValidator();
console.log(myZCV.isAcceptable("Nazmul"));

let zcv1 = new ZipCodeValidator();
console.log(zcv1.isAcceptable("12030"));