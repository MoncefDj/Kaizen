import isPalindrome from "./isPalindrome";

function testIsPalindrome(example: example): void {
  if (isPalindrome(example.number) === example.isPalindrome) {
    console.log("passed!");
  } else {
    console.log("failed!");
  }
}

class example {
  constructor(private _number: number, private _isPalindrome: boolean) {
    this._number = _number;
    this._isPalindrome = _isPalindrome;
  }

  public get number(): number {
    return this._number;
  }

  public get isPalindrome(): boolean {
    return this._isPalindrome;
  }
}

let example1: example = new example(121, true);
testIsPalindrome(example1);

let example2: example = new example(-121, false);
testIsPalindrome(example2);

let example3: example = new example(10, false);
testIsPalindrome(example3);
