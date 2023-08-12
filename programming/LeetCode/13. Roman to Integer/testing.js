"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const romanToInt_1 = __importDefault(require("./romanToInt"));
function testRomanToInt(example) {
    if ((0, romanToInt_1.default)(example.romanNumber) === example.number) {
        console.log("passed!");
    }
    else {
        console.log("failed!");
    }
}
class example {
    constructor(_number, _romanNumber) {
        this._number = _number;
        this._romanNumber = _romanNumber;
        this._number = _number;
        this._romanNumber = _romanNumber;
    }
    get romanNumber() {
        return this._romanNumber;
    }
    get number() {
        return this._number;
    }
}
let example1 = new example(3, "III");
testRomanToInt(example1);
let example2 = new example(58, "LVIII");
testRomanToInt(example2);
let example3 = new example(1994, "MCMXCIV");
testRomanToInt(example3);
