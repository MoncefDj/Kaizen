import twoSum from "./twoSum";

function arrayComparison(arr1: any[], arr2: any[]): boolean {
  if (arr1.length === arr2.length) {
    return (
      arr1.filter((element: any) => arr2.includes(element)).length ===
      arr1.length
    );
  } else {
    return false;
  }
}

function testTwoSum(example: example): void {
  if (
    arrayComparison(twoSum(example.nums, example.target), example.expectedValue)
  ) {
    console.log("passed!");
  } else {
    console.log("failed!");
  }
}

class example {
  constructor(
    private _nums: number[],
    private _target: number,
    private _expectedValue: number[]
  ) {
    this._nums = _nums;
    this._target = _target;
    this._expectedValue = _expectedValue;
  }

  public get nums(): number[] {
    return this._nums;
  }

  public get target(): number {
    return this._target;
  }

  public get expectedValue(): number[] {
    return this._expectedValue;
  }
}

let example1: example = new example([2, 7, 11, 15], 9, [0, 1]);
testTwoSum(example1);

let example2: example = new example([3, 2, 4], 6, [1, 2]);
testTwoSum(example2);

let example3: example = new example([3, 3], 6, [0, 1]);
testTwoSum(example3);
