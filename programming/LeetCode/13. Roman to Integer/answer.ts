function romanToInt(s: string): number {
  interface romanNumbersMapIndexSignature {
    [key: string]: number;
  }
  const romanNumbersMap: romanNumbersMapIndexSignature = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
  };
  let result: number = 0;

  for (let i = 0; i < s.length; i++) {
    if (
      (s[i] === "I" && (s[i + 1] === "V" || s[i + 1] === "X")) ||
      (s[i] === "X" && (s[i + 1] === "L" || s[i + 1] === "C")) ||
      (s[i] === "C" && (s[i + 1] === "D" || s[i + 1] === "M"))
    ) {
      result += romanNumbersMap[s[i + 1]] - romanNumbersMap[s[i]];
      i++;
    } else {
      result += romanNumbersMap[s[i]];
    }
  }

  return result;
}

// testing

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
