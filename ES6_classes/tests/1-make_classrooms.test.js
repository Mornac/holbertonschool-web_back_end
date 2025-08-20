describe('initializeRooms', () => {
  test('should create rooms with correct sizes', () => {
    const initializeRooms = require('../1-make_classrooms').default; // Ajout de .default
    const rooms = initializeRooms();
    
    expect(rooms).toHaveLength(3);
    expect(rooms[0]._maxStudentsSize).toBe(19);
    expect(rooms[1]._maxStudentsSize).toBe(20);
    expect(rooms[2]._maxStudentsSize).toBe(34);
  });
});
