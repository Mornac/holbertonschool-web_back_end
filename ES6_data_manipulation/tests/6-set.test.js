/* eslint-disable */
import setFromArray from '../6-set';

describe("setFromArray", () => {
  test("should create a set from an array", () => {
    const mySet = setFromArray([1, 2, 3, 4, 5]);
    expect(mySet.size).toBe(5);
  });
});
