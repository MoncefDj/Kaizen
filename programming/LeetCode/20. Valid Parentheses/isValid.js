"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function isValid(s) {
    let stack = [];
    const pairs = ["(", "[", "{"];
    for (const symbol of s) {
        if (pairs.includes(symbol)) {
            stack.push(symbol);
        }
        else if (stack[stack.length - 1] === getTheOtherPair(symbol)) {
            stack.pop();
        }
        else {
            return false;
        }
    }
    return !stack.length;
}
function getTheOtherPair(symbol) {
    switch (symbol) {
        case ")":
            return "(";
        case "]":
            return "[";
        case "}":
            return "{";
        default:
            return "";
    }
}
exports.default = isValid;
