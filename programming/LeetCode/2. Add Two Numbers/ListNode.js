"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class ListNode {
    constructor(val, next) {
        this.val = val === undefined ? 0 : val;
        this.next = next === undefined ? null : next;
    }
}
exports.default = ListNode;
