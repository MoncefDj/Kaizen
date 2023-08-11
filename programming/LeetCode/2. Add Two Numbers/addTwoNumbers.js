"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.listLength = exports.addTwoNumbers = void 0;
const ListNode_1 = __importDefault(require("./ListNode"));
function addTwoNumbers(l1, l2) {
    fillListGap(l1, l2);
    let result = new ListNode_1.default();
    let tempResult = result;
    const l1Length = listLength(l1);
    for (let i = 0; i < l1Length || tempResult.val !== 0; i++) {
        tempResult.next = new ListNode_1.default(Math.floor((tempResult.val + (l1 === null || l1 === void 0 ? void 0 : l1.val) + (l2 === null || l2 === void 0 ? void 0 : l2.val)) / 10));
        tempResult.val = (tempResult.val + (l1 === null || l1 === void 0 ? void 0 : l1.val) + (l2 === null || l2 === void 0 ? void 0 : l2.val)) % 10;
        tempResult = tempResult === null || tempResult === void 0 ? void 0 : tempResult.next;
        l1 = l1 === null || l1 === void 0 ? void 0 : l1.next;
        l2 = l2 === null || l2 === void 0 ? void 0 : l2.next;
    }
    return result;
}
exports.addTwoNumbers = addTwoNumbers;
function fillListGap(l1, l2) {
    const l1Length = listLength(l1);
    const l2Length = listLength(l2);
    if (l1Length === l2Length) {
        return;
    }
    else if (l1Length > l2Length) {
        for (let i = 0; i < l1Length; i++) {
            if ((l2 === null || l2 === void 0 ? void 0 : l2.next) === null) {
                l2.next = new ListNode_1.default();
            }
            l2 = l2.next;
        }
    }
    else if (l1Length < l2Length) {
        for (let i = 0; i < l2Length; i++) {
            if ((l1 === null || l1 === void 0 ? void 0 : l1.next) === null) {
                l1.next = new ListNode_1.default();
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
exports.listLength = listLength;
