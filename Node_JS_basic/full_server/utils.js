const fs = require('node:fs');

async function readDatabase(path) {
  return new Promise((resolve, reject) => {
    fs.readFile(path, 'utf-8', (err, data) => {
      if (err) {
        reject(new Error('Cannot load the database'));
        return;
      }

      const lines = data.split('\n').filter((line) => line.trim() !== '');
      if (lines.length <= 1) {
        console.log('Number of students: 0');
        resolve({});
        return;
      }

      const studentLines = lines.slice(1);
      let totalStudents = 0;
      const fieldGroups = {};

      studentLines.forEach((line) => {
        const studentData = line.split(',').map((el) => el.trim());
        const firstname = studentData[0];
        const field = studentData[3];

        if (firstname && field) {
          totalStudents += 1;
          if (!fieldGroups[field]) {
            fieldGroups[field] = [];
          }
          fieldGroups[field].push(firstname);
        }
      });

      console.log(fieldGroups);
      resolve(fieldGroups);
    });
  });
}

module.exports = readDatabase;
