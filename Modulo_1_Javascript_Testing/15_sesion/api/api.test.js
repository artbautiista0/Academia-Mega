const { getUser } = require('./api');

test('getUser debe retornar un usuario con id 1', async () => {
  const user = await getUser();
  expect(user).toEqual({ id: 1, name: 'Ana' });
});
