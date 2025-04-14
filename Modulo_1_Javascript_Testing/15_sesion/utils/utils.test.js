const { saludar, obtenerEdad } = require('./utils');

test('saludar debe retornar un saludo con el nombre', () => {
  expect(saludar('Luis')).toBe('Hola, Luis!');
});

test('obtenerEdad calcula correctamente la edad', () => {
  const fecha = new Date();
  const nacimiento = new Date(fecha.getFullYear() - 30, fecha.getMonth(), fecha.getDate());
  expect(obtenerEdad(nacimiento.toISOString())).toBe(30);
});


