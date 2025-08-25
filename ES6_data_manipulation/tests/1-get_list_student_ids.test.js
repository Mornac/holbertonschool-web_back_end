import getListStudentsIds from '../1-get_list_student_ids';

describe('getListStudentsIds', () => {
  test('should return an array of ids', () => {
    const students = getListStudentsIds ();
    expect(students).toEqual([]);
  });
});
