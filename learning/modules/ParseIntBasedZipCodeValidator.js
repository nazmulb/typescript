"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class ParseIntBasedZipCodeValidator {
    isAcceptable(s) {
        return s.length === 5 && parseInt(s).toString() === s;
    }
}
exports.ParseIntBasedZipCodeValidator = ParseIntBasedZipCodeValidator;
// Export original validator but rename it
var ZipCodeValidator_1 = require("./ZipCodeValidator");
exports.RegExpBasedZipCodeValidator = ZipCodeValidator_1.ZipCodeValidator;
