function isPalindrome(x: number): boolean {
  return true;
}

// testing

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
