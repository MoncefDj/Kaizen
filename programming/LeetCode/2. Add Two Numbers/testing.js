"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const ListNode_1 = __importDefault(require("./ListNode"));
const addTwoNumbers_1 = require("./addTwoNumbers");
const recursionAddTwoNumbers_1 = __importDefault(require("./recursionAddTwoNumbers"));
function arrayToList(numberArray) {
    let list = new ListNode_1.default(numberArray[0]);
    if (numberArray.length > 1) {
        let nextNode = list;
        for (let i = 0; i < numberArray.length; i++) {
            nextNode.next = new ListNode_1.default(numberArray[i + 1]);
            nextNode = nextNode.next;
        }
    }
    return list;
}
function areEqualLists(l1, l2) {
    if ((0, addTwoNumbers_1.listLength)(l1) !== (0, addTwoNumbers_1.listLength)(l2)) {
        return false;
    }
    for (let l1NextNode = l1, l2NextNode = l2; l1NextNode.next !== null && l2NextNode.next !== null; l1NextNode = l1NextNode.next, l2NextNode = l2NextNode.next) {
        if (l1NextNode.val !== l2NextNode.val) {
            return false;
        }
    }
    if (l1.next == null && l2.next == null && l1.val !== l2.val) {
        return false;
    }
    else if (l1.next == null && l2.next !== null) {
        return false;
    }
    else if (l1.next !== null && l2.next == null) {
        return false;
    }
    else {
        return true;
    }
}
function logList(list) {
    let stringFormat = ``;
    if (list.next === null) {
        stringFormat += `| ${list.val} |`;
    }
    for (let nextNode = list; nextNode.next !== null; nextNode = nextNode.next) {
        stringFormat += `| ${nextNode.val} |`;
    }
    console.log(stringFormat);
}
function testAddTwoNumbers(example) {
    if (areEqualLists(example.l1PlusL2, (0, addTwoNumbers_1.addTwoNumbers)(example.l1, example.l2))) {
        console.log("passed!");
    }
    else {
        console.log("failed!");
    }
}
function testRecursionAddTwoNumbers(example) {
    if (areEqualLists(example.l1PlusL2, (0, recursionAddTwoNumbers_1.default)(example.l1, example.l2))) {
        console.log("passed!");
    }
    else {
        console.log("failed!");
    }
}
class example {
    constructor(_l1, _l2, _l1PlusL2) {
        this._l1 = _l1;
        this._l2 = _l2;
        this._l1PlusL2 = _l1PlusL2;
        this._l1 = _l1;
        this._l2 = _l2;
        this._l1PlusL2 = _l1PlusL2;
    }
    get l1() {
        return this._l1;
    }
    get l2() {
        return this._l2;
    }
    get l1PlusL2() {
        return this._l1PlusL2;
    }
}
let l1 = arrayToList([2, 4, 3]);
let l2 = arrayToList([5, 6, 4]);
let l1PlusL2 = arrayToList([7, 0, 8]);
let example1 = new example(l1, l2, l1PlusL2);
testAddTwoNumbers(example1);
testRecursionAddTwoNumbers(example1);
l1 = arrayToList([0]);
l2 = arrayToList([0]);
l1PlusL2 = arrayToList([0]);
let example2 = new example(l1, l2, l1PlusL2);
testAddTwoNumbers(example2);
testRecursionAddTwoNumbers(example2);
l1 = arrayToList([9, 9, 9, 9, 9, 9, 9]);
l2 = arrayToList([9, 9, 9, 9]);
l1PlusL2 = arrayToList([8, 9, 9, 9, 0, 0, 0, 1]);
let example3 = new example(l1, l2, l1PlusL2);
testAddTwoNumbers(example3);
testRecursionAddTwoNumbers(example3);
