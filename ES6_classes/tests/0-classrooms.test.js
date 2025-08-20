describe('ClassRoom', () => {
  test('should set maxStudentsSize correctly', () => {
    const ClassRoom = require('../0-classroom');
    const room = new ClassRoom(10);
    expect(room._maxStudentsSize).toBe(10);
  });
});
