/* eslint-disable */
import groceriesList from '../9-groceries_list.js';

describe("groceriesList", () => {
  test("should return a Map with the groceries list", () => {
    const expectedMap = new Map ([
      ['Apples', 10],
      ['Tomatoes', 10],
      ['Pasta', 1],
      ['Rice', 1],
      ['Banana', 5]
    ]);
    expect(groceriesList()).toEqual(expectedMap);
  });
});
