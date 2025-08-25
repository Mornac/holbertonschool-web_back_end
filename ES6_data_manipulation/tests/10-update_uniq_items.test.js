/* eslint-disable */
import updateUniqueItems from '../10-update_uniq_items.js';

describe("updateUniqueItems", () => {
  test("should update the map correctly", () => {
    const initialMap = new Map ([
      ['Apples', 10],
      ['Tomatoes', 10],
      ['Pasta', 1],
      ['Rice', 1],
      ['Banana', 5]
    ]);
    const expectedMap = new Map ([
      ['Apples', 10],
      ['Tomatoes', 10],
      ['Pasta', 100],
      ['Rice', 100],
      ['Banana', 5]
    ]);
    expect(updateUniqueItems(initialMap)).toEqual(expectedMap);
  });
});
