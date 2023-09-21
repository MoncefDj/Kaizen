# Definition for singly-linked list.
class ListNode:
    def __init__(self, val=0, next=None):
        self.val = val
        self.next = next


class Solution:
    def mergeTwoLists(self, list1: ListNode, list2: ListNode) -> ListNode:
        if list1 == None and list2 == None:
            return None
        elif list1 != None and list2 == None:
            return ListNode(list1.val, Solution.mergeTwoLists(None, list1.next, None))
        elif list1 == None and list2 != None:
            return ListNode(list2.val, Solution.mergeTwoLists(None, None, list2.next))
        else:
            if list1.val < list2.val:
                val = list1.val
                next1 = list1.next
                next2 = list2
            else:
                val = list2.val
                next2 = list2.next
                next1 = list1
            return ListNode(val, Solution.mergeTwoLists(None, next1, next2))
