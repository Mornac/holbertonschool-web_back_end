export default function getStudentsByLocation(students, city='San Francisco') {
  return students.filter(student => student.location === city);
}
