"use strict";
function twoSum(nums, target) {
    for (let i = 0; i < nums.length - 1; i++) {
        for (let j = i + 1; j < nums.length; j++) {
            if (sumEqualsTarget(nums[i], nums[j], target)) {
                return [i, j];
            }
        }
    }
    function sumEqualsTarget(num1, num2, target) {
        return num1 + num2 === target;
    }
    return [];
}
function arrayComparison(arr1, arr2) {
    if (arr1.length > arr2.length) {
        return (arr1.filter((element) => arr2.includes(element)).length ===
            arr1.length);
    }
    else {
        return (arr2.filter((element) => arr1.includes(element)).length ===
            arr2.length);
    }
}
// testing
function testTwoSum(example) {
    if (arrayComparison(twoSum(example.Nums, example.Target), example.ExpectedValue)) {
        console.log("passed!");
    }
    else {
        console.log("failed!");
    }
}
class example {
    constructor(nums, target, expectedValue) {
        this.nums = nums;
        this.target = target;
        this.expectedValue = expectedValue;
        this.nums = nums;
        this.target = target;
        this.expectedValue = expectedValue;
    }
    get Nums() {
        return this.nums;
    }
    get Target() {
        return this.target;
    }
    get ExpectedValue() {
        return this.expectedValue;
    }
}
let example1 = new example([2, 7, 11, 15], 9, [0, 1]);
testTwoSum(example1);
let example2 = new example([3, 2, 4], 6, [1, 2]);
testTwoSum(example2);
let example3 = new example([3, 3], 6, [0, 1]);
testTwoSum(example3);
