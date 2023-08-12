import longestCommonPrefix from "./longestCommonPrefix";

function testLongestCommonPrefix(example: example): void {
  if (longestCommonPrefix(example.strings) === example.longestCommonPrefix) {
    console.log("passed!");
  } else {
    console.log("failed!");
  }
}

class example {
  constructor(
    private _strings: string[],
    private _longestCommonPrefix: string
  ) {
    this._strings = _strings;
    this._longestCommonPrefix = _longestCommonPrefix;
  }

  public get strings(): string[] {
    return this._strings;
  }

  public get longestCommonPrefix(): string {
    return this._longestCommonPrefix;
  }
}

let example1: example = new example(["flower", "flow", "flight"], "fl");
testLongestCommonPrefix(example1);

let example2: example = new example(["dog", "racecar", "car"], "");
testLongestCommonPrefix(example2);
