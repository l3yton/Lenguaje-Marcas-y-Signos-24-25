/* Vector 100 números */

// Crear un array con 100 números aleatorios entre 1 y 100
const numeros = Array.from({ length: 100 }, () => Math.floor(Math.random() * 100) + 1);
// Calcular la suma total
const sumaTotal = numeros.reduce((acumulador, numero) => acumulador + numero, 0);
// Mostrar resultados
console.log("Array de 100 números:", numeros);
console.log("Sumatorio de todos los números:", sumaTotal);


/* Ejercicio Array */

const readline = require('readline');
const rl = readline.createInterface({
input: process.stdin,
output: process.stdout
});
const numeros = [];
let pares = 0, impares = 0;
function pedirNumero() {
rl.question("Introduce los números que desees, y después introduce 0 para terminar: ",
entrada => {
let numero = Number(entrada);
if (entrada === "0" || isNaN(numero)) {
// Mostrar resultados y cerrar
console.log("Array de entrada:", numeros);
console.log(`Cantidad de números pares: ${pares}`);
console.log(`Cantidad de números impares: ${impares}`);
rl.close();
return;
}
numeros.push(numero);
if (numero % 2 === 0) pares++;
else impares++;
pedirNumero(); // Pedir otro número
});
}
pedirNumero();
