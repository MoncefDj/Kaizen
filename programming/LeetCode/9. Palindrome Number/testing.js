"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const isPalindrome_1 = __importDefault(require("./isPalindrome"));
function testIsPalindrome(example) {
    if ((0, isPalindrome_1.default)(example.number) === example.isPalindrome) {
        console.log("passed!");
    }
    else {
        console.log("failed!");
    }
}
class example {
    constructor(_number, _isPalindrome) {
        this._number = _number;
        this._isPalindrome = _isPalindrome;
        this._number = _number;
        this._isPalindrome = _isPalindrome;
    }
    get number() {
        return this._number;
    }
    get isPalindrome() {
        return this._isPalindrome;
    }
}
let example1 = new example(121, true);
testIsPalindrome(example1);
let example2 = new example(-121, false);
testIsPalindrome(example2);
let example3 = new example(10, false);
testIsPalindrome(example3);
