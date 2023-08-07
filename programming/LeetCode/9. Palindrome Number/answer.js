"use strict";
function isPalindrome(x) {
    return x === reversePositiveNumber(x);
    function reversePositiveNumber(number) {
        if (number < 0) {
            return NaN;
        }
        let numberCopy = number;
        let reversedNumber = 0;
        do {
            reversedNumber = reversedNumber * 10 + (numberCopy % 10);
            numberCopy = Math.floor(numberCopy / 10);
        } while (Math.floor(numberCopy) > 0);
        return reversedNumber;
    }
}
// testing
function testIsPalindrome(example) {
    if (isPalindrome(example.number) === example.isPalindrome) {
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
