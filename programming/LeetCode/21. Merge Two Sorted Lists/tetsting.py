from mergeTwoLists import *


def testMergeTwoLists(example):
    if areEqualLists(
        example.result, Solution.mergeTwoLists(None, example.list1, example.list2)
    ):
        print("passed!")
    else:
        print("failed!")


def arrayToList(array) -> ListNode:
    if not array:
        return None

    result = ListNode(array[0])
    temp = result

    for i in range(1, len(array)):
        temp.next = ListNode(array[i])
        temp = temp.next

    return result


def areEqualLists(list1: ListNode, list2: ListNode) -> bool:
    i = list1
    j = list2

    while i != None and j != None:
        if i.val != j.val:
            return False
        i = i.next
        j = j.next

    return i == None and j == None


def printList(list: ListNode):
    i = list
    while i != None:
        print("|", i.val, end=" |")
        i = i.next
    print()


class Example:
    def __init__(self, list1, list2, result):
        self.list1 = arrayToList(list1)
        self.list2 = arrayToList(list2)
        self.result = arrayToList(result)


example1 = Example([1, 2, 4], [1, 3, 4], [1, 1, 2, 3, 4, 4])
testMergeTwoLists(example1)
example2 = Example([], [], [])
testMergeTwoLists(example2)
example3 = Example([], [0], [0])
testMergeTwoLists(example3)
