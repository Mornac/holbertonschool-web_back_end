const fs = require('fs').promises;

async function readDatabase(path) {
  let data;

try {
  data = await fs.readFile(path, 'utf-8');
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
        'Number of students in ' + field + ': ' + students.length + '. List: ' + students.join(', '));
  }
}

module.exports = readDatabase;
