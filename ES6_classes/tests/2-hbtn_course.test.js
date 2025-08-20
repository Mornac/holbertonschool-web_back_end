// tests/2-hbtn_course.test.js

describe('HolbertonCourse', () => {
  const HolbertonCourse = require('../2-hbtn_course').default;

  // Test du constructeur avec des valeurs valides
  describe('Constructor', () => {
    test('should create instance with valid parameters', () => {
      const course = new HolbertonCourse('ES6', 1, ['Bob', 'Jane']);
      
      expect(course.name).toBe('ES6');
      expect(course.length).toBe(1);
      expect(course.students).toEqual(['Bob', 'Jane']);
    });

    test('should throw TypeError when name is not a string', () => {
      expect(() => {
        new HolbertonCourse(12, 1, ['Bob', 'Jane']);
      }).toThrow(TypeError);
      
      expect(() => {
        new HolbertonCourse(12, 1, ['Bob', 'Jane']);
      }).toThrow('Name must be a string');
    });

    test('should throw TypeError when length is not a number', () => {
      expect(() => {
        new HolbertonCourse('ES6', '1', ['Bob', 'Jane']);
      }).toThrow(TypeError);
      
      expect(() => {
        new HolbertonCourse('ES6', '1', ['Bob', 'Jane']);
      }).toThrow('Length must be a number');
    });

    test('should throw TypeError when students is not an array', () => {
      expect(() => {
        new HolbertonCourse('ES6', 1, 'Bob, Jane');
      }).toThrow(TypeError);
      
      expect(() => {
        new HolbertonCourse('ES6', 1, 'Bob, Jane');
      }).toThrow('Students must be an array');
    });
  });

  // Test des getters
  describe('Getters', () => {
    let course;
    
    beforeEach(() => {
      course = new HolbertonCourse('ES6', 1, ['Bob', 'Jane']);
    });

    test('should get name correctly', () => {
      expect(course.name).toBe('ES6');
    });

    test('should get length correctly', () => {
      expect(course.length).toBe(1);
    });

    test('should get students correctly', () => {
      expect(course.students).toEqual(['Bob', 'Jane']);
    });
  });

  // Test des setters
  describe('Setters', () => {
    let course;
    
    beforeEach(() => {
      course = new HolbertonCourse('ES6', 1, ['Bob', 'Jane']);
    });

    describe('Name setter', () => {
      test('should set valid name', () => {
        course.name = 'Python 101';
        expect(course.name).toBe('Python 101');
      });

      test('should throw TypeError when setting invalid name', () => {
        expect(() => {
          course.name = 12;
        }).toThrow(TypeError);
        
        expect(() => {
          course.name = 12;
        }).toThrow('Name must be a string');
      });
    });

    describe('Length setter', () => {
      test('should set valid length', () => {
        course.length = 2;
        expect(course.length).toBe(2);
      });

      test('should throw TypeError when setting invalid length', () => {
        expect(() => {
          course.length = '2';
        }).toThrow(TypeError);
        
        expect(() => {
          course.length = '2';
        }).toThrow('Length must be a number');
      });
    });

    describe('Students setter', () => {
      test('should set valid students array', () => {
        course.students = ['Alice', 'Charlie'];
        expect(course.students).toEqual(['Alice', 'Charlie']);
      });

      test('should throw TypeError when setting invalid students', () => {
        expect(() => {
          course.students = 'Alice, Charlie';
        }).toThrow(TypeError);
        
        expect(() => {
          course.students = 'Alice, Charlie';
        }).toThrow('Students must be an array');
      });
    });
  });

  // Tests d'intégration (scénarios complets)
  describe('Integration tests', () => {
    test('should handle complete workflow like in main file', () => {
      const c1 = new HolbertonCourse('ES6', 1, ['Bob', 'Jane']);
      
      // Test initial values
      expect(c1.name).toBe('ES6');
      
      // Test valid modification
      c1.name = 'Python 101';
      expect(c1.name).toBe('Python 101');
      
      // Test invalid modification throws error
      expect(() => {
        c1.name = 12;
      }).toThrow(TypeError);
    });
  });
});
