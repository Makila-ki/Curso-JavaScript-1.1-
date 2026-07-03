let nombre = 'Makilero'; // con valor
let infe; // sin valor: respuesta undefined.
// Javascript no deja generar variables con el mismo nombre, que inicie con un número, que contenga espacios.


console.log(nombre);
console.log(infe);

// UpperCamelCase: La primera letra de cada palabra va en mayúscula, excepto la primera palabra.
// Ejemplo: NombreCompleto.
// CamelCase: La primera letra de cada palabra va en mayúscula, incluyendo la primera palabra.
// Ejemplo: nombreCompleto.
// SnakeCase: Todas las palabras van en minúscula y separadas por guiones bajos.
// Ejemplo: nombre_completo.

// Javascript es case sensitive, es decir, distingue entre mayúsculas y minúsculas. Por lo tanto, 
// nombreCompleto y NombreCompleto son variables diferentes. 
let NombreCompleto = 'Makilero UpperCamelCase'; // UpperCamelCase
let nombreCompleto = 'Makilero CamelCase'; // CamelCase: es la convención más utilizada en Javascript para nombrar 
// variables y funciones.
let nombre_completo = 'Makilero SnakeCase'; // SnakeCase

// En Javascript, las variables pueden ser declaradas con var, let o const.
// Las variables ya declaradas, basta con poner un let en el primer uso, no es necesario ponerlo en los siguientes usos.
let apellido;
var animal;
//Ejemplo:
apellido = 'González';
