/**
 * @fileoverview Este archivo configura y ejecuta un servidor Express básico.
 * El servidor responde con "¡Hola, mundo!" en la ruta raíz ('/').
 * 
 * @module app
 */

const express = require('express');
const app = express();
const PORT = 3001;

/**
 * Ruta principal que responde con un saludo.
 * 
 * @name GET /
 * @function
 * @param {express.Request} req - Objeto de solicitud HTTP.
 * @param {express.Response} res - Objeto de respuesta HTTP.
 * @returns {void}
 */
app.get('/', (req, res) => {
  res.send('¡Hola, mundo!');
});

/**
 * Inicia el servidor en el puerto especificado y muestra un mensaje en consola.
 * 
 * @function
 * @name listen
 * @param {number} PORT - Puerto en el que el servidor escuchará.
 * @param {Function} callback - Función que se ejecuta cuando el servidor inicia.
 * @returns {void}
 */
app.listen(PORT, () => {
  console.log(`Servidor escuchando en ${PORT}`);
});