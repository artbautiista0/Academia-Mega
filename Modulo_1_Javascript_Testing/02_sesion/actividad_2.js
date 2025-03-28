const correctPassword = "12345";
let attempts = 3;

while (attempts > 0) {
    const userInput = prompt("Ingrese la contraseña:");
    
    if (userInput === correctPassword) {
        console.log("Acceso concedido.");
        break;
    } else {
        attempts--;
        console.log(`Contraseña incorrecta. Te quedan ${attempts} intento(s).`);
    }

    if (attempts === 0) {
        console.log("Has agotado todos los intentos. Acceso denegado.");
    }
}

