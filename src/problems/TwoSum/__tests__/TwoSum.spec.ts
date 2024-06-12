import { twoSum } from '../index';

describe('Problem two sum test', () => {
  test('Test should pass and return the correct indices', () => {
    expect(twoSum([2, 7, 11, 15], 9)).toStrictEqual([0, 1]);
    expect(twoSum([3, 2, 4], 6)).toStrictEqual([1, 2]);
  });
  test('Test should fail when returned in-correct indices', () => {
    expect(twoSum([2, 7, 11, 15], 9)).not.toStrictEqual([0, 2]);
  });
});
