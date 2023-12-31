import ListNode from "./ListNode";
import { addTwoNumbers, listLength } from "./addTwoNumbers";
import recursionAddTwoNumbers from "./recursionAddTwoNumbers";

function arrayToList(numberArray: number[]): ListNode {
  let list: ListNode = new ListNode(numberArray[0]);
  if (numberArray.length > 1) {
    let nextNode: ListNode = list;

    for (let i = 0; i < numberArray.length; i++) {
      nextNode.next = new ListNode(numberArray[i + 1]);
      nextNode = nextNode.next;
    }
  }
  return list;
}

function areEqualLists(l1: ListNode, l2: ListNode): boolean {
  if (listLength(l1) !== listLength(l2)) {
    return false;
  }
  for (
    let l1NextNode: ListNode = l1, l2NextNode: ListNode = l2;
    l1NextNode.next !== null && l2NextNode.next !== null;
    l1NextNode = l1NextNode.next, l2NextNode = l2NextNode.next
  ) {
    if (l1NextNode.val !== l2NextNode.val) {
      return false;
    }
  }
  if (l1.next == null && l2.next == null && l1.val !== l2.val) {
    return false;
  } else if (l1.next == null && l2.next !== null) {
    return false;
  } else if (l1.next !== null && l2.next == null) {
    return false;
  } else {
    return true;
  }
}

function logList(list: ListNode): void {
  let stringFormat: string = ``;
  if (list.next === null) {
    stringFormat += `| ${list.val} |`;
  }
  for (
    let nextNode: ListNode = list;
    nextNode.next !== null;
    nextNode = nextNode.next
  ) {
    stringFormat += `| ${nextNode.val} |`;
  }
  console.log(stringFormat);
}

function testAddTwoNumbers(example: example): void {
  if (areEqualLists(example.l1PlusL2, addTwoNumbers(example.l1, example.l2)!)) {
    console.log("passed!");
  } else {
    console.log("failed!");
  }
}

function testRecursionAddTwoNumbers(example: example): void {
  logList(recursionAddTwoNumbers(example.l1, example.l2)!);
  logList(example.l1PlusL2)

  if (
    areEqualLists(
      example.l1PlusL2,
      recursionAddTwoNumbers(example.l1, example.l2)!
    )
  ) {
    console.log("passed!");
  } else {
    console.log("failed!");
  }
}

class example {
  constructor(
    private _l1: ListNode,
    private _l2: ListNode,
    private _l1PlusL2: ListNode
  ) {
    this._l1 = _l1;
    this._l2 = _l2;
    this._l1PlusL2 = _l1PlusL2;
  }

  public get l1(): ListNode {
    return this._l1;
  }

  public get l2(): ListNode {
    return this._l2;
  }

  public get l1PlusL2(): ListNode {
    return this._l1PlusL2;
  }
}

let l1: ListNode = arrayToList([2, 4, 3]);
let l2: ListNode = arrayToList([5, 6, 4]);
let l1PlusL2: ListNode = arrayToList([7, 0, 8]);
let example1: example = new example(l1, l2, l1PlusL2);
testAddTwoNumbers(example1);
testRecursionAddTwoNumbers(example1);

l1 = arrayToList([0]);
l2 = arrayToList([0]);
l1PlusL2 = arrayToList([0]);
let example2: example = new example(l1, l2, l1PlusL2);
testAddTwoNumbers(example2);
testRecursionAddTwoNumbers(example2);

l1 = arrayToList([9, 9, 9, 9, 9, 9, 9]);
l2 = arrayToList([9, 9, 9, 9]);
l1PlusL2 = arrayToList([8, 9, 9, 9, 0, 0, 0, 1]);
let example3: example = new example(l1, l2, l1PlusL2);

testAddTwoNumbers(example3);
testRecursionAddTwoNumbers(example3);
