import isValid from "./isValid";

function testIsValid(example: example): void {
  if (example.isValid === isValid(example.input)) {
    console.log("passed!");
  } else {
    console.log("failed!");
  }
}

class example {
  constructor(private _input: string, private _isValid: boolean) {
    this._input = _input;
    this._isValid = _isValid;
  }

  public get input(): string {
    return this._input;
  }

  public get isValid(): boolean {
    return this._isValid;
  }
}

const example1: example = new example("()", true);
testIsValid(example1);
const example2: example = new example("()[]{}", true);
testIsValid(example2);
const example3: example = new example("(]", false);
testIsValid(example3);
