"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function longestCommonPrefix(strs) {
    if (!strs.length)
        return "";
    strs.sort();
    let first = strs[0], last = strs[strs.length - 1];
    let i = 0;
    while (i < first.length && i < last.length && first[i] === last[i])
        i++;
    return first.substring(0, i);
}
exports.default = longestCommonPrefix;
