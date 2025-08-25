/* eslint-disable */
import createInt8TypedArray from '../5-typed_arrays';


describe("createInt8TypedArray", () => {
  test("should create an Int8Array of the specified length and fill it with the specified value", () => {
    const buffer = createInt8TypedArray(10, 2, 89);
    const view = new DataView(buffer.buffer);
    expect(view.getInt8(2)).toBe(89);
  });
});
