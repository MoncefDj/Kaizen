"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const ListNode_1 = __importDefault(require("./ListNode"));
function recursionAddTwoNumbers(l1, l2, carry = 0) {
    const l1Val = l1 && l1.val ? l1.val : 0;
    const l2Val = l2 && l2.val ? l2.val : 0;
    const total = l1Val + l2Val + carry;
    if (l1 === null && l2 === null) {
        return carry === 0 ? null : new ListNode_1.default(carry, null);
    }
    else {
        const l1Next = l1 && l1.next ? l1.next : null;
        const l2Next = l2 && l2.next ? l2.next : null;
        return new ListNode_1.default(total % 10, recursionAddTwoNumbers(l1Next, l2Next, total >= 10 ? 1 : 0));
    }
}
exports.default = recursionAddTwoNumbers;
