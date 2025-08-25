/* eslint-disable */
import hasValuesFromArray from '../7-has_array_values.js';

describe("hasValuesFromArray", () => {
  test("should return true if all array values are in the set", () => {
    const mySet = new Set([1, 2, 3, 4, 5]);
    expect(hasValuesFromArray(mySet, [1, 2, 3])).toBe(true);
  });
});
