"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const isValid_1 = __importDefault(require("./isValid"));
function testIsValid(example) {
    if (example.isValid === (0, isValid_1.default)(example.input)) {
        console.log("passed!");
    }
    else {
        console.log("failed!");
    }
}
class example {
    constructor(_input, _isValid) {
        this._input = _input;
        this._isValid = _isValid;
        this._input = _input;
        this._isValid = _isValid;
    }
    get input() {
        return this._input;
    }
    get isValid() {
        return this._isValid;
    }
}
const example1 = new example("()", true);
testIsValid(example1);
const example2 = new example("()[]{}", true);
testIsValid(example2);
const example3 = new example("(]", false);
testIsValid(example3);
