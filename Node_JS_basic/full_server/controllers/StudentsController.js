const { response } = require("express");

class StudentsController {
  static getAllStudents(request, response) {
    response.status(200);
  }

  static async readDatabase(database) {
    console.log('This is the list of our students');
    let data;

    try {
      data = await fs.readFile(database, 'utf-8');
    } catch (err) {
      throw new Error('Cannot load the database');
    }

    const lines = data.split('\n').filter(line => line.trim() !== '');

    if (lines.length <= 1) {
      console.log('Number of students: 0');
      return;
    }

    const studentLines = lines.slice(1);
    let totalStudents = 0;
    const fieldGroups = {};

    studentLines.forEach(line => {
      const studentData = line.split(',');

      if (studentData.length >= 4) {
        const firstname = studentData[0].trim();
        const lastname = studentData[1].trim();
        const age = studentData[2].trim();
        const field = studentData[3].trim();

        if (firstname && lastname && age && field) {
          totalStudents++;

          if (!fieldGroups[field]) {
            fieldGroups[field] = [];
          }

          fieldGroups[field].push(firstname);
        }
      }
    });

    console.log('Number of students: ' + totalStudents);

    for (const field in fieldGroups) {
      const students = fieldGroups[field];
      console.log(
        'Number of students in ' + field + ': ' + students.length + '. List: ' + students.join(', ')
      );
    }
  }

  static getAllStudentsByMajor(request, response) {
    response.status(200);
    request.params(major)
    const major = fieldGroups['CS', 'SWE'];
  }

  static async readDatabase(database) {
    console.log('This is the list of our students');
    let data;

    try {
      data = await fs.readFile(database, 'utf-8');
    } catch (err) {
      throw new Error('Cannot load the database');
      response.status(500);
    }

    const lines = data.split('\n').filter(line => line.trim() !== '');

    if (lines.length <= 1) {
      console.log('Number of students: 0');
      return;
    }

    const studentLines = lines.slice(1);
    let totalStudents = 0;
    const fieldGroups = {};

    studentLines.forEach(line => {
      const studentData = line.split(',');

      if (studentData.length >= 4) {
        const firstname = studentData[0].trim();
        const lastname = studentData[1].trim();
        const age = studentData[2].trim();
        const field = studentData[3].trim();

        if (firstname && lastname && age && field) {
          totalStudents++;

          if (!fieldGroups[field]) {
            fieldGroups[field] = [];
          }

          fieldGroups[field].push(firstname);
        }
      }
    });
  }
}

module.exports = AppController;
