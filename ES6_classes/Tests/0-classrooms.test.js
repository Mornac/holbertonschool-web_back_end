import ClassRoom from './0-classroom';

test('ClassRoom stores maxStudentsSize', () => {
  const room = new ClassRoom(10);
  expect(room._maxStudentsSize).toBe(10);
});
