import readDatabase from '../utils';

class StudentsController {
  static async getAllStudents(request, response) {
    const database = process.argv[2];
    try {
      const fieldGroups = await readDatabase(database);
      console.log(fieldGroups);

      let output = 'This is the list of our students\n';
      const fieldarray = Object.keys(fieldGroups).sort();

      for (const field of fieldarray) {
        const stud = fieldGroups[field];
        output += `Number of students in ${field}: ${stud.length}. List: ${stud.join(', ')}\n`;
      }

      return response.status(200).send(output.trim());
    } catch (err) {
      return response.status(500).send('Cannot load the database');
    }
  }

  static async getAllStudentsByMajor(request, response) {
    const database = process.argv[2];
    const { major } = request.params;

    if (!['CS', 'SWE'].includes(major)) {
      return response.status(500).send('Major parameter must be CS or SWE');
    }

    try {
      const fieldGroups = await readDatabase(database);
      const students = fieldGroups[major] || [];
      return response.status(200).send(`List: ${students.join(', ')}`);
    } catch (err) {
      return response.status(500).send('Cannot load the database');
    }
  }
}

export default StudentsController;
