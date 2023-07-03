export default function updateStudentGradeByCity(getListStudents, city, newGrades) {
  if (Array.isArray(getListStudents)) {
    const students = getListStudents.filter((student) => student.location === city);
    const studentsId = students.map((student) => student.id);
    const newStudents = studentsId.map((id, index) => 
    ({ id, firstName: students[index].firstName, location: students[index].location,  grade: newGrades[index] }));
    return newStudents;
  }
  return [];
}