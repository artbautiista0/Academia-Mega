const listaNotas = [];
const listaElement = document.getElementById("listaNotas");
const resultadoElement = document.getElementById("resultado");

function agregarNota() {
    try {
        const input = document.getElementById("notaInput");
        const valor = input.value.trim();
        const numero = parseFloat(valor);
    
        if (valor === "") {
            throw new Error("El campo no puede estar vacío");
        }
    
        if (isNaN(numero)) {
            throw new Error("Por favor, ingresa una nota válida.");
            
        }
    
        if (Math.abs(numero) > 1e6) {
            throw new Error("Número demasiado grande. Debe estar entre -1,000,000 y 1,000,000.");
            
        }

    
        listaNotas.push(numero);
        mostrarNotas();
        input.value = "";
        input.focus();
    } catch (error) {
        console.error("Error al agregar número:", error);
    }
  }

function mostrarNotas() {
    listaElement.innerHTML = "";
    listaNotas.forEach((num, index) => {
        const li = document.createElement("li");
        li.textContent = `Nota ${index + 1}: ${num}`;
        listaElement.appendChild(li);
    });
}

function calcularPromedio() {
    try {
        if (listaNotas.length === 0) {
            resultadoElement.textContent = "No se han ingresado notas.";
            return;
        }
    
        if (listaNotas.some(n => n < 0)) {
            alert("Atención: hay números negativos en la lista.");
        }
    
        const suma = listaNotas.reduce((acc, val) => acc + val, 0);
        const promedio = suma / listaNotas.length;
    
        resultadoElement.textContent = `El promedio es: ${promedio.toFixed(2)}`;
    } catch (error) {
        console.error("Error al calcular el promedio:", error);
        resultadoElement.textContent = "Error al calcular el promedio:";
    }
  }
  
