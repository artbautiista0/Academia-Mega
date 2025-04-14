const { test, expect, run } = require("./test-framework");
const { invertirTexto } = require("./invertirTexto");

test("Invierte un texto simple", () => {
  expect(invertirTexto("hola")).toBe("aloh");
});

test("Invierte una cadena vacía", () => {
  expect(invertirTexto("")).toBe("");
});

test("Invierte una sola letra", () => {
  expect(invertirTexto("a")).toBe("a");
});

test("Invierte una frase con espacios", () => {
  expect(invertirTexto("hola mundo")).toBe("odnum aloh");
});

test("Invierte texto con números y símbolos", () => {
  expect(invertirTexto("123!abc")).toBe("cba!321");
});

test("Lanza error si no es texto", () => {
  expect(() => invertirTexto(123)).toThrow();
});

run();
