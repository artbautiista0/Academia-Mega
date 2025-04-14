const { suma, resta, dividir } = require('./math');

test('suma 2 + 3 debe dar 5', () => {
    expect(suma(2, 3)).toBe(5);
});

test('resta 5 - 2 debe dar 3', () => {
    expect(resta(5, 2)).toBe(3);
});

test('dividir números normales', () => {
    expect(dividir(10, 2)).toBe(5);
});
  
test('dividir entre cero lanza error', () => {
    expect(() => dividir(5, 0)).toThrow('No se puede dividir entre cero');
});