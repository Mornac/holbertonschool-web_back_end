import getStudentsByLocation from "../2-get_students_by_loc";/* eslint-disable */

describe("getStudentsByLocation", () => {
  test("should return an array of students located in San Francisco", () => {
    const students = getStudentsByLocation();
    expect(students[0]).toEqual({id: 1, firstName: 'Guillaume', location: 'San Francisco'});
    expect(students[1]).toEqual({id: 5, firstName: 'Serena', location: 'San Francisco'});
  });
});
