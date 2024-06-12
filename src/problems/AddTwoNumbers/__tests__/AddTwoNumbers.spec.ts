import { addTwoNumbers } from '../index';
import { ListNode } from '../../../libs/ListNode';

const l1c = new ListNode(3, null);
const l1b = new ListNode(4, l1c);
const l1a = new ListNode(2, l1b);

const l2c = new ListNode(4, null);
const l2b = new ListNode(6, l2c);
const l2a = new ListNode(5, l2b);

const l3a = new ListNode(0, null);
const l4a = new ListNode(0, null);

describe('Problem add two numbers test', () => {
  test('Test should pass and return the correct value', () => {
    const ln = addTwoNumbers(l1a, l2a);
    expect(ln?.val).toBe(7);
    const nextLn = ln?.next;
    expect(nextLn?.val).toBe(0);
    const nextNextLn = nextLn?.next;
    expect(nextNextLn?.val).toBe(8);
  });
  test('Test should pass and return the correct value', () => {
    const ln = addTwoNumbers(l3a, l4a);
    expect(ln?.val).toBe(0);
  });
  test('Test should pass and return null', () => {
    const ln = addTwoNumbers(null, null);
    expect(ln).toBeNull();
  });
});
