export default function getStudentsByLocation(getListStudents, city) {
  if (Array.isArray(getListStudents)) {
    return getListStudents.filter((student) => student.location === city);
  }
  return [];
}
