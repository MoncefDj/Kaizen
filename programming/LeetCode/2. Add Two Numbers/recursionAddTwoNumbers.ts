import ListNode from "./ListNode";

function recursionAddTwoNumbers(
  l1: ListNode | null,
  l2: ListNode | null,
  carry: number = 0
): ListNode | null {
  if (l1 === null && l2 === null && carry === 0) {
    return null;
  } else {
    return new ListNode(
      (l1?.val! + l2?.val! + carry) % 10,
      recursionAddTwoNumbers(
        l1?.next!,
        l2?.next!,
        Math.floor((l1?.val! + l2?.val! + carry) / 10)
      )
    );
  }
}

export default recursionAddTwoNumbers;
