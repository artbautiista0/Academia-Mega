function validarDatos(data) {
    try {
      // Validamos que 'nombre' sea una cadena de texto
      if (typeof data.nombre !== 'string') {
        throw new Error("El campo 'nombre' debe ser una cadena de texto.");
      }
      
      // Validamos que 'edad' sea un número
      if (typeof data.edad !== 'number') {
        throw new Error("El campo 'edad' debe ser un número.");
      }
      
      // Validamos que 'edad' no sea un número negativo
      if (data.edad < 0) {
        throw new Error("El campo 'edad' no puede ser negativo.");
      }
      
      // Se pueden agregar más validaciones según los requisitos
      console.log("Validación exitosa: Los datos son correctos.");
      
    } catch (error) {
      console.error("Error en la validación:", error.message);
    }
  }
  // Ejemplo de uso:
  //validarDatos({ nombre: "Fernando", edad: 28 }); // Datos válidos
  //validarDatos({ nombre: "Maria", edad: -5 }); // Error: edad no puede ser negativa
  //validarDatos({ nombre: 4223, edad: 40 });      // Error: nombre debe ser una cadena
  