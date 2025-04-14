const { test, expect, run } = require("./test-miniframework.js");

function sumar(a, b) {
  return a + b;
}

test("Suma dos números", () => {
  expect(sumar(1, 2)).toBe(3);
});

test("Falla si el resultado es incorrecto", () => {
  expect(sumar(2, 2)).toBe(5); // Esto debe fallar
});

run();