import ListNode from "./ListNode";

function addTwoNumbers(
  l1: ListNode | null,
  l2: ListNode | null
): ListNode | null {
  fillListGap(l1!, l2!);
  let result: ListNode | null = new ListNode();
  let tempResult: ListNode | null = result;
  const l1Length: number = listLength(l1);
  for (let i = 0; i < l1Length || tempResult.val !== 0; i++) {
    tempResult.next = new ListNode(
      Math.floor((tempResult.val + l1?.val! + l2?.val!) / 10)
    );
    tempResult.val = (tempResult.val + l1?.val! + l2?.val!) % 10;

    tempResult = tempResult?.next;
    l1 = l1?.next!;
    l2 = l2?.next!;
  }
  return result;
}

function fillListGap(l1: ListNode, l2: ListNode): void {
  const l1Length: number = listLength(l1);
  const l2Length: number = listLength(l2);
  if (l1Length === l2Length) {
    return;
  } else if (l1Length > l2Length) {
    for (let i: number = 0; i < l1Length; i++) {
      if (l2?.next === null) {
        l2.next = new ListNode();
      }
      l2 = l2.next;
    }
  } else if (l1Length < l2Length) {
    for (let i: number = 0; i < l2Length; i++) {
      if (l1?.next === null) {
        l1.next = new ListNode();
      }
      l1 = l1.next;
    }
  }
}

function listLength(list: ListNode | null): number {
  let length: number = 0;
  if (list === null) return 0;
  for (let i: ListNode = list; i.next !== null; i = i.next, length++);
  return length;
}

export { addTwoNumbers, listLength };
