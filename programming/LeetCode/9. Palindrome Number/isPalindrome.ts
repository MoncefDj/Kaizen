function isPalindrome(x: number): boolean {
  return x === reversePositiveNumber(x);

  function reversePositiveNumber(number: number): number {
    if (number < 0) {
      return NaN;
    }

    let numberCopy: number = number;
    let reversedNumber: number = 0;

    do {
      reversedNumber = reversedNumber * 10 + (numberCopy % 10);
      numberCopy = Math.floor(numberCopy / 10);
    } while (Math.floor(numberCopy) > 0);

    return reversedNumber;
  }
}

export default isPalindrome;
