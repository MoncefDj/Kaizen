import romanToInt from "./romanToInt";

function testRomanToInt(example: example): void {
  if (romanToInt(example.romanNumber) === example.number) {
    console.log("passed!");
  } else {
    console.log("failed!");
  }
}

class example {
  constructor(private _number: number, private _romanNumber: string) {
    this._number = _number;
    this._romanNumber = _romanNumber;
  }

  public get romanNumber(): string {
    return this._romanNumber;
  }

  public get number(): number {
    return this._number;
  }
}

let example1: example = new example(3, "III");
testRomanToInt(example1);
let example2: example = new example(58, "LVIII");
testRomanToInt(example2);
let example3: example = new example(1994, "MCMXCIV");
testRomanToInt(example3);
