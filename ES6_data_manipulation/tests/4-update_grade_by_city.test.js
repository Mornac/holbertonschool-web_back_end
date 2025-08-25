/* eslint-disable */
import updateStudentGradeByCity from '../4-update_grade_by_city';

describe("updateStudentGradeByCity", () => {
  test("should return an array of students with their new grades", () => {
    const students = [
      {id: 1, location: 'San Francisco'},
      {id: 2, location: 'New York'},
      {id: 3, location: 'San Francisco'},
      {id: 5, location: 'San Francisco'},
    ];
    const newGrades = [
      {studentId: 5, grade: 97},
      {studentId: 1, grade: 86},
    ];

    const result = updateStudentGradeByCity(students, 'San Francisco', newGrades);
    expect(result).toEqual([
      {id: 1, location: 'San Francisco', grade: 86},
      {id: 3, location: 'San Francisco', grade: 'N/A'},
      {id: 5, location: 'San Francisco', grade: 97},
    ]);
    expect(newGrades).toEqual([
      { studentId: 5, grade: 97 },
      { studentId: 1, grade: 86 }
    ]);
  });
});
