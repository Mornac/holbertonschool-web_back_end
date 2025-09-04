import fs from 'fs';

class StudentsController {
  static async readDatabase(database) {
    console.log('This is the list of our students');
    let data;
    try {
      data = await fs.promises.readFile(database, 'utf-8');
    } catch (err) {
      throw new Error('Cannot load the database');
    }

    const lines = data.split('\n').filter((line) => line.trim() !== '');
    const studentLines = lines.slice(1);
    const fieldGroups = {};

    studentLines.forEach((line) => {
      const [firstname, lastname, age, field] = line.split(',').map((el) => el.trim());
      if (firstname && field) {
        if (!fieldGroups[field]) fieldGroups[field] = [];
        fieldGroups[field].push(firstname);
      }
    });

    return fieldGroups;
  }

  static async getAllStudents(request, response) {
    const database = process.argv[2];
    try {
      const fieldGroups = await StudentsController.readDatabase(database);

      let output = 'This is the list of our students\n';
      Object.keys(fieldGroups)
        .sort((a, b) => a.toLowerCase().localeCompare(b.toLowerCase()))
        .forEach((field) => {
          output += `Number of students in ${field}: ${fieldGroups[field].length}. List: ${fieldGroups[field].join(', ')}\n`;
        });

      response.status(200).send(output.trim());
    } catch (err) {
      response.status(500).send('Cannot load the database');
    }
  }

  static getAllStudentsByMajor(request, response) {
    const database = process.argv[2];
    const { major } = request.params;

    if (!['CS', 'SWE'].includes(major)) {
      return response.status(500).send('Major parameter must be CS or SWE');
    }

    try {
      const fieldGroups = StudentsController.readDatabase(database);
      const students = fieldGroups[major] || [];
      res.status(200).send(`List: ${students.join(', ')}`);
    } catch (err) {
      response.status(500).send('Cannot load the database');
    }
  }
}

export default StudentsController;
