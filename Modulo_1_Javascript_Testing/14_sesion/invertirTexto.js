function invertirTexto(texto) {
    if (typeof texto !== "string") {
      throw new Error("Se esperaba una cadena de texto");
    }
    return texto.split("").reverse().join("");
  }
  
  module.exports = { invertirTexto };
  