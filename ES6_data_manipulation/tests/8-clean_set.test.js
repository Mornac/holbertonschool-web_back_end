/* eslint-disable */
import cleanSet from '../8-clean_set.js';

describe("cleanSet", () => {
  test("should return a string with the cleaned set values", () => {
    const mySet = new Set(['apple', 'banana', 'apricot', 'cherry']);
    expect(cleanSet(mySet, 'ap')).toBe('ple-ricot');
  });
});
