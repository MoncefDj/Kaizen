function isValid(s: string): boolean {
  let stack = [];
  const pairs: string[] = ["(", "[", "{"];

  for (const symbol of s) {
    if (pairs.includes(symbol)) {
      stack.push(symbol);
    } else if (stack[stack.length - 1] === getTheOtherPair(symbol)) {
      stack.pop();
    } else {
      return false;
    }
  }
  return !stack.length;
}

function getTheOtherPair(symbol: string): string {
  switch (symbol) {
    case ")":
      return "(";
    case "]":
      return "[";
    case "}":
      return "{";
    default:
      return "";
  }
}

export default isValid;
