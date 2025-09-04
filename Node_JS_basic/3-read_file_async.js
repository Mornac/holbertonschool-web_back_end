const fs = require('fs');

async function countStudents(path) {
  return new Promise((resolve, reject) => {
    fs.readFile(path, 'utf-8', (err, data) => {
      if (err) {
        reject(new Error('Cannot load the database'));
        return;
      }

      const lines = data.split('\n').filter((line) => line.trim() !== '');

      if (lines.length <= 1) {
        console.log('Number of students: 0');
      }

      const studentLines = lines.slice(1);
      let totalStudents = 0;
      const fieldGroups = {};

      studentLines.forEach((line) => {
        const studentData = line.split(',');

        if (studentData.length >= 4) {
          const firstname = studentData[0].trim();
          const lastname = studentData[1].trim();
          const age = studentData[2].trim();
          const field = studentData[3].trim();

          if (firstname && lastname && age && field) {
            totalStudents += 1;

            if (!fieldGroups[field]) {
              fieldGroups[field] = [];
            }

            fieldGroups[field].push(firstname);
          }
        }
      });

      let result = '';
      console.log(`Number of students: ${totalStudents}`);
      result += `Number of students: ${totalStudents}`;

      for (const field of Object.keys(fieldGroups)) {
        const students = fieldGroups[field];

        console.log(`Number of students in ${field}: ${students.length}. List: ${students.join(', ')}`);

        result += `\nNumber of students in ${field}: ${students.length}. List: ${students.join(', ')}`;
      }

      resolve(result);
    });
  });
}

module.exports = countStudents;
