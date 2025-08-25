import getListStudents from '../0-get_list_students';

describe('getListStudents', () => {
  test('should return an array of students', () => {
    const students = getListStudents ();
    expect(students[0]).toEqual({id: 1, firstName: 'Guillaume', location: 'San Francisco'});
    expect(students[1]).toEqual({id: 2, firstName: 'James', location: 'Columbia'});
    expect(students[2]).toEqual({id: 3, firstName: 'Serena', location: 'San Francisco'});
  });
});
