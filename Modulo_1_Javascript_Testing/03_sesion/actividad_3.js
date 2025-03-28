function crearContador() {
    let contador = 0;
    return function () {
        contador++;
        return contador;
    };
}

const contador1 = crearContador();
const contador2 = crearContador();
console.log("Contador");
console.log(contador1()); // Outputs: 1
console.log(contador1()); // Outputs: 2
console.log(contador1()); // Outputs: 2
console.log(contador2()); // Outputs: 1
console.log(contador2()); // Outputs: 2

function crearMultiplicador(multiplicador) {
    return function (numero) {
        return numero * multiplicador;
    };
}

const duplicar = crearMultiplicador(2);
const triplicar = crearMultiplicador(3);

console.log("Multiplicador");
console.log(duplicar(4)); // Outputs: 8
console.log(triplicar(4)); // Outputs: 12

function crearSumador(sumando) {
    return function (numero) {
        return numero + sumando;
    };
}

const sumarCinco = crearSumador(5);
const sumarDiez = crearSumador(10);

console.log("Sumador");
console.log(sumarCinco(4)); // Outputs: 9
console.log(sumarDiez(4)); // Outputs: 14


