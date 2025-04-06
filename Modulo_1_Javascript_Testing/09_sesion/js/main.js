import { saludar, despedir } from './utils.js';

document.addEventListener("DOMContentLoaded", () => {
  // Utilizamos las funciones importadas
  const mensajeSaludo = saludar("Mundo");
  const mensajeDespedida = despedir("Mundo");

  // Creamos elementos para mostrar los mensajes en la página
  const saludoElement = document.createElement("h1");
  saludoElement.textContent = mensajeSaludo;

  const despedidaElement = document.createElement("p");
  despedidaElement.textContent = mensajeDespedida;

  // Añadimos los elementos al body del documento
  document.body.appendChild(saludoElement);
  document.body.appendChild(despedidaElement);
});
