// Manipulando el DOM con JavaScript

// 1. Crear un nuevo elemento y agregarlo al DOM
const newDiv = document.createElement('div'); // Crear un nuevo elemento <div>
newDiv.textContent = 'Hola, soy un nuevo elemento en el DOM'; // Agregar texto al <div>
newDiv.style.color = 'blue'; // Cambiar el color del texto
newDiv.style.fontSize = '20px'; // Cambiar el tamaño de la fuente
document.body.appendChild(newDiv); // Agregar el <div> al final del <body>

// 2. Seleccionar un elemento existente y modificarlo
const existingElement = document.querySelector('h1'); // Seleccionar el primer <h1> en el documento
if (existingElement) {
    existingElement.textContent = 'Título Modificado con JavaScript'; // Cambiar el texto del <h1>
    existingElement.style.color = 'green'; // Cambiar el color del texto
}

// 3. Agregar un evento a un botón
const button = document.createElement('button'); // Crear un botón
button.textContent = 'Haz clic aquí'; // Texto del botón
button.style.marginTop = '20px'; // Agregar un margen superior
document.body.appendChild(button); // Agregar el botón al <body>

button.addEventListener('click', () => {
    alert('¡Botón clickeado!'); // Mostrar una alerta al hacer clic
});

// 4. Eliminar un elemento del DOM
const removeButton = document.createElement('button'); // Crear otro botón
removeButton.textContent = 'Eliminar el nuevo div'; // Texto del botón
removeButton.style.marginLeft = '10px'; // Agregar un margen izquierdo
document.body.appendChild(removeButton); // Agregar el botón al <body>

removeButton.addEventListener('click', () => {
    if (newDiv.parentNode) {
        newDiv.parentNode.removeChild(newDiv); // Eliminar el <div> creado anteriormente
        alert('El div ha sido eliminado');
    }
});

// 5. Agregar un elemento JSON al DOM
const jsonData = {
    nombre: "Arturo",
    edad: 26,
    ocupacion: "Dev"
};

const jsonDiv = document.createElement('div'); // Crear un nuevo elemento <div>
jsonDiv.textContent = `JSON Data: ${JSON.stringify(jsonData, null, 2)}`; // Convertir el JSON a texto legible
jsonDiv.style.whiteSpace = 'pre-wrap'; // Preservar los saltos de línea y espacios
jsonDiv.style.marginTop = '20px'; // Agregar un margen superior
document.body.appendChild(jsonDiv); // Agregar el <div> al <body>