// Declaración de variables
// En JavaScript, puedes usar var, let o const para declarar variables.

// var: Tiene un alcance global o de función (no se recomienda usarlo en la actualidad).
var nombre = "Arturo";
console.log("Var:", nombre);

// let: Tiene un alcance de bloque (recomendado para variables que cambian).
let edad = 26;
console.log("Let:", edad);

// const: Tiene un alcance de bloque y no puede ser reasignado (recomendado para valores constantes).
const pais = "Mexico";
console.log("Const:", pais);

// Tipos de datos en JavaScript

// 1. String (Cadenas de texto)
let saludo = "Que onda!";
console.log("String:", saludo);

// 2. Number (Números, tanto enteros como decimales)
let numeroEntero = 42;
let numeroDecimal = 3.14;
console.log("Number (entero):", numeroEntero);
console.log("Number (decimal):", numeroDecimal);

// 3. Boolean (Valores lógicos: true o false)
let esMayorDeEdad = true;
console.log("Boolean:", esMayorDeEdad);

// 4. Null (Representa la ausencia intencional de un valor)
let valorNulo = null;
console.log("Null:", valorNulo);

// 5. Undefined (Una variable declarada pero no inicializada)
let valorIndefinido;
console.log("Undefined:", valorIndefinido);

// Concatenación de strings
let nombreCompleto = "Arturo" + " Bautista";
console.log("Concatenación de strings:", nombreCompleto);

// Uso de plantillas literales (template literals)
let mensaje = `Hola, mi nombre es ${nombre} y tengo ${edad} años.`;
console.log("Template literal:", mensaje);