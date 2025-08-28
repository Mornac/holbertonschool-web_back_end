export default function getStudentsByLocation(getListStudents, city='San Francisco') {
  return getListStudents.filter(student => student.location === city);
}
