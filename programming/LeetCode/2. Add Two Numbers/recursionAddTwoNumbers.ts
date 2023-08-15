import ListNode from "./ListNode";

function recursionAddTwoNumbers(
  l1: ListNode | null,
  l2: ListNode | null,
  carry: number = 0
): ListNode | null {
  const l1Val: number = l1 && l1.val ? l1.val : 0;
  const l2Val: number = l2 && l2.val ? l2.val : 0;
  const total: number = l1Val + l2Val + carry;
  if (l1 === null && l2 === null) {
    return carry === 0 ? null : new ListNode(carry, null);
  } else {
    const l1Next: ListNode | null = l1 && l1.next ? l1.next : null;
    const l2Next: ListNode | null = l2 && l2.next ? l2.next : null;
    return new ListNode(
      total % 10,
      recursionAddTwoNumbers(l1Next, l2Next, total >= 10 ? 1 : 0)
    );
  }
}

export default recursionAddTwoNumbers;
