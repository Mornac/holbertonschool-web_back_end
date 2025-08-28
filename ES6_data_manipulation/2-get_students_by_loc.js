export default function getStudentsByLocation(getListStudents, city='San Francisco') {
  if (Array.isArray(getListStudents)) {
    return getListStudents.filter(student => student.location === city);
  }
  return [];
}
