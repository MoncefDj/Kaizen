"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function romanToInt(s) {
    const romanNumbersMap = {
        I: 1,
        V: 5,
        X: 10,
        L: 50,
        C: 100,
        D: 500,
        M: 1000,
    };
    let result = 0;
    for (let i = 0; i < s.length; i++) {
        if ((s[i] === "I" && (s[i + 1] === "V" || s[i + 1] === "X")) ||
            (s[i] === "X" && (s[i + 1] === "L" || s[i + 1] === "C")) ||
            (s[i] === "C" && (s[i + 1] === "D" || s[i + 1] === "M"))) {
            result += romanNumbersMap[s[i + 1]] - romanNumbersMap[s[i]];
            i++;
        }
        else {
            result += romanNumbersMap[s[i]];
        }
    }
    return result;
}
exports.default = romanToInt;
