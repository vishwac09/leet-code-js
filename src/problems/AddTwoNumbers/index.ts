import { ListNode } from '../../libs/ListNode';

const l1c = new ListNode(3, null);
const l1b = new ListNode(4, l1c);
const l1a = new ListNode(2, l1b);

const l2c = new ListNode(4, null);
const l2b = new ListNode(6, l2c);
const l2a = new ListNode(5, l2b);

type ListNodeValueType = Array<number> | null;

// 342 + 465

export const addTwoNumbers = (
  l1: ListNode | null,
  l2: ListNode | null
): ListNode | null => {
  if (l1 === null || l2 === null) {
    return null;
  }
  const l1Parsed = parseListNode(l1);
  const l2Parsed = parseListNode(l2);
  if (l1Parsed !== null && l2Parsed !== null) {
    const max =
      l1Parsed.length > l2Parsed.length
        ? l1Parsed.length
        : l2Parsed.length;
    const newListNode: Array<number> = [];
    l1Parsed.reverse();
    l2Parsed.reverse();
    let carry = 0;
    for (let i = 0; i < max; i++) {
      const a = l1Parsed[i] ?? 0;
      const b = l2Parsed[i] ?? 0;
      const sum = a + b + carry;
      carry = sum > 9 ? 1 : 0;
      newListNode[i] = sum % 10;
    }
    if (carry !== 0) {
      newListNode.push(carry);
    }
    newListNode.reverse();
    let prev: ListNode | null = null;
    let current: ListNode | null = null;
    for (let i = 0; i < newListNode.length; i++) {
      current = new ListNode(Number(newListNode[i]), prev);
      prev = current;
    }
    return current;
  }
  return null;
};

/**
 * Parse the list and concatenate the returned values.
 *
 * @param {ListNode | null} ln
 *
 * @return {string}
 */
export const parseListNode = (
  ln: ListNode | null = null
): Array<number> | null => {
  let listNodeValue: ListNodeValueType = [];
  if (ln !== null) {
    const temp: ListNodeValueType = parseListNode(ln.next);
    if (temp !== null) {
      listNodeValue = temp;
    }
    listNodeValue.push(ln.val);
    return listNodeValue;
  }
  return null;
};

addTwoNumbers(l1a, l2a);
