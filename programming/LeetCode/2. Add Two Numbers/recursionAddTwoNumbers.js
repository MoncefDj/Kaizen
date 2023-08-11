"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const ListNode_1 = __importDefault(require("./ListNode"));
function recursionAddTwoNumbers(l1, l2, carry = 0) {
    if (l1 === null && l2 === null && carry === 0) {
        return null;
    }
    else {
        return new ListNode_1.default(((l1 === null || l1 === void 0 ? void 0 : l1.val) + (l2 === null || l2 === void 0 ? void 0 : l2.val) + carry) % 10, recursionAddTwoNumbers(l1 === null || l1 === void 0 ? void 0 : l1.next, l2 === null || l2 === void 0 ? void 0 : l2.next, Math.floor(((l1 === null || l1 === void 0 ? void 0 : l1.val) + (l2 === null || l2 === void 0 ? void 0 : l2.val) + carry) / 10)));
    }
}
exports.default = recursionAddTwoNumbers;
