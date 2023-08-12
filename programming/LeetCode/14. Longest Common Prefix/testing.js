"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const longestCommonPrefix_1 = __importDefault(require("./longestCommonPrefix"));
function testLongestCommonPrefix(example) {
    if ((0, longestCommonPrefix_1.default)(example.strings) === example.longestCommonPrefix) {
        console.log("passed!");
    }
    else {
        console.log("failed!");
    }
}
class example {
    constructor(_strings, _longestCommonPrefix) {
        this._strings = _strings;
        this._longestCommonPrefix = _longestCommonPrefix;
        this._strings = _strings;
        this._longestCommonPrefix = _longestCommonPrefix;
    }
    get strings() {
        return this._strings;
    }
    get longestCommonPrefix() {
        return this._longestCommonPrefix;
    }
}
let example1 = new example(["flower", "flow", "flight"], "fl");
testLongestCommonPrefix(example1);
let example2 = new example(["dog", "racecar", "car"], "");
testLongestCommonPrefix(example2);
