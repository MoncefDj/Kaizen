"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
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
exports.default = isPalindrome;
