const listaNotas = [];
const listaElement = document.getElementById("listaNotas");
const resultadoElement = document.getElementById("resultado");
const errorMensaje = document.getElementById("errorMensaje");
const input = document.getElementById("notaInput");

function agregarNota() {

    try {
        const valor = input.value.trim();
        const numero = parseFloat(valor);

        errorMensaje.textContent = "";
        input.classList.remove("input-error");
    
        if (valor === "") {
            mostrarError("El campo no puede estar vacío.");
            return;
        }
    
        if (isNaN(numero)) {
            mostrarError("Ingresa una nota valida.");
            return;
        }

        if (numero < 0 || numero > 10) {
            mostrarError("La nota debe estar entre 0 y 10.");
            return;
        }

        listaNotas.push(numero);
        mostrarNotas();
        input.value = "";
        input.focus();
    } catch (error) {
        mostrarError("Error inesperado al agregar la nota");
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
            resultadoElement.className = "resultado info";
            resultadoElement.textContent = "No se puede realizar el calculo, no se han ingresado notas.";
            return;
        }
    
        if (listaNotas.some(n => n < 0)) {
            alert("Atención: hay números negativos en la lista.");
        }
    
        const suma = listaNotas.reduce((acc, val) => acc + val, 0);
        const promedio = suma / listaNotas.length;
    
        //resultadoElement.className = "resultado";

        let mensaje = `El promedio es: ${promedio.toFixed(2)}`;
  
        if (promedio === 10) {
          resultadoElement.classList.add("excelente");
          mensaje += " - Excelente 👏";
        } else if (promedio <= 6) {
          resultadoElement.classList.add("reprobado");
          mensaje += " - Reprobado ❌";
        } else if (promedio < 8) {
          resultadoElement.classList.add("advertencia");
          mensaje += " - Regular ⚠️";
        } else {
          resultadoElement.classList.add("aprobado");
          mensaje += " - Aprobado ✅";
        }
  
        resultadoElement.textContent = mensaje;
    } catch (error) {
        resultadoElement.textContent = "Error inesperado al calcular promedio.";
        resultadoElement.className = "resultado info";
        console.error(error);
    }
  }

function mostrarError(mensaje) {
    errorMensaje.textContent = mensaje;
    input.classList.add("input-error");
  }
  
