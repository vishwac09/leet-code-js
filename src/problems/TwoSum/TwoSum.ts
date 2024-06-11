export const twoSum = (
  numbers: Array<number> = [],
  target: number = 0
) => {
  const map = new Map<number, { idx: number }>();
  for (let i = 0; i < numbers.length; i++) {
    const remainingDiff = target - numbers[i];
    const remainderNumberObject = map.get(remainingDiff);
    if (remainderNumberObject !== undefined) {
      return [remainderNumberObject.idx, i];
    }
    map.set(numbers[i], { idx: i });
  }
};
