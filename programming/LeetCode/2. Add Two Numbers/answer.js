"use strict";
// Definition for singly-linked list.
class ListNode {
    constructor(val, next) {
        this.val = val === undefined ? 0 : val;
        this.next = next === undefined ? null : next;
    }
}
function addTwoNumbers(l1, l2) {
    fillListGap(l1, l2);
    let result = new ListNode();
    let tempResult = result;
    const l1Length = listLength(l1);
    for (let i = 0; i < l1Length || tempResult.val !== 0; i++) {
        tempResult.next = new ListNode(Math.floor((tempResult.val + (l1 === null || l1 === void 0 ? void 0 : l1.val) + (l2 === null || l2 === void 0 ? void 0 : l2.val)) / 10));
        tempResult.val = (tempResult.val + (l1 === null || l1 === void 0 ? void 0 : l1.val) + (l2 === null || l2 === void 0 ? void 0 : l2.val)) % 10;
        tempResult = tempResult === null || tempResult === void 0 ? void 0 : tempResult.next;
        l1 = l1 === null || l1 === void 0 ? void 0 : l1.next;
        l2 = l2 === null || l2 === void 0 ? void 0 : l2.next;
    }
    return result;
}
function fillListGap(l1, l2) {
    const l1Length = listLength(l1);
    const l2Length = listLength(l2);
    if (l1Length === l2Length) {
        return;
    }
    else if (l1Length > l2Length) {
        for (let i = 0; i < l1Length; i++) {
            if ((l2 === null || l2 === void 0 ? void 0 : l2.next) === null) {
                l2.next = new ListNode();
            }
            l2 = l2.next;
        }
    }
    else if (l1Length < l2Length) {
        for (let i = 0; i < l2Length; i++) {
            if ((l1 === null || l1 === void 0 ? void 0 : l1.next) === null) {
                l1.next = new ListNode();
            }
            l1 = l1.next;
        }
    }
}
function listLength(list) {
    let length = 0;
    if (list === null)
        return 0;
    for (let i = list; i.next !== null; i = i.next, length++)
        ;
    return length;
}
// testing
function arrayToList(numberArray) {
    let list = new ListNode(numberArray[0]);
    if (numberArray.length > 1) {
        let nextNode = list;
        for (let i = 0; i < numberArray.length; i++) {
            nextNode.next = new ListNode(numberArray[i + 1]);
            nextNode = nextNode.next;
        }
    }
    return list;
}
function areEqualLists(l1, l2) {
    if (listLength(l1) !== listLength(l2)) {
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
    logList(addTwoNumbers(example.l1, example.l2));
    logList(example.l1PlusL2);
    if (areEqualLists(example.l1PlusL2, addTwoNumbers(example.l1, example.l2))) {
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
l1 = arrayToList([0]);
l2 = arrayToList([0]);
l1PlusL2 = arrayToList([0]);
let example2 = new example(l1, l2, l1PlusL2);
testAddTwoNumbers(example2);
l1 = arrayToList([9, 9, 9, 9, 9, 9, 9]);
l2 = arrayToList([9, 9, 9, 9]);
l1PlusL2 = arrayToList([8, 9, 9, 9, 0, 0, 0, 1]);
let example3 = new example(l1, l2, l1PlusL2);
testAddTwoNumbers(example3);