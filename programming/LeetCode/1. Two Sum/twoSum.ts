function twoSum(nums: number[], target: number): number[] {
  for (let i = 0; i < nums.length - 1; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (sumEqualsTarget(nums[i], nums[j], target)) {
        return [i, j];
      }
    }
  }

  function sumEqualsTarget(
    num1: number,
    num2: number,
    target: number
  ): boolean {
    return num1 + num2 === target;
  }

  return [];
}

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

export default twoSum;
