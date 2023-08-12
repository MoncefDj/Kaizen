"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const twoSum_1 = __importDefault(require("./twoSum"));
function arrayComparison(arr1, arr2) {
    if (arr1.length === arr2.length) {
        return (arr1.filter((element) => arr2.includes(element)).length ===
            arr1.length);
    }
    else {
        return false;
    }
}
function testTwoSum(example) {
    if (arrayComparison((0, twoSum_1.default)(example.nums, example.target), example.expectedValue)) {
        console.log("passed!");
    }
    else {
        console.log("failed!");
    }
}
class example {
    constructor(_nums, _target, _expectedValue) {
        this._nums = _nums;
        this._target = _target;
        this._expectedValue = _expectedValue;
        this._nums = _nums;
        this._target = _target;
        this._expectedValue = _expectedValue;
    }
    get nums() {
        return this._nums;
    }
    get target() {
        return this._target;
    }
    get expectedValue() {
        return this._expectedValue;
    }
}
let example1 = new example([2, 7, 11, 15], 9, [0, 1]);
testTwoSum(example1);
let example2 = new example([3, 2, 4], 6, [1, 2]);
testTwoSum(example2);
let example3 = new example([3, 3], 6, [0, 1]);
testTwoSum(example3);
