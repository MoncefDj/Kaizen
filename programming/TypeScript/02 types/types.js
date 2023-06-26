"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var myNumber;
function stringPlusNumber(stringNumber /*<- 0 is the default value*/, number, toDisplay) {
    if (stringNumber === void 0) { stringNumber = "0"; }
    if (number === void 0) { number = 0; }
    if (toDisplay === void 0) { toDisplay = true; }
    var result;
    switch (stringNumber) {
        case "0":
            result = 0 + number;
            break;
        case "1":
            result = 1 + number;
            break;
        case "2":
            result = 2 + number;
            break;
        case "3":
            result = 3 + number;
            break;
        case "4":
            result = 4 + number;
            break;
        case "5":
            result = 5 + number;
            break;
        case "6":
            result = 6 + number;
            break;
        case "7":
            result = 7 + number;
            break;
        case "8":
            result = 8 + number;
            break;
        case "9":
            result = 9 + number;
            break;
        default:
            console.log("thats not a valid number");
            result = 0;
            break;
    }
    if (toDisplay) {
        console.log("".concat(stringNumber, " + ").concat(number, "  =  ").concat(result));
    }
    return result;
}
myNumber = stringPlusNumber("6", 4);
console.log("myNumber = stringPlusNumber(\"6\", 4); => ".concat(myNumber));
