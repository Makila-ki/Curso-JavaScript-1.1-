let numero = 10; // number
let nombre = 'Makilero'; // string
let esVerdadero = true; // boolean
let nulo = null; // null
let indefinido; // undefined

//Ejemplo de tipado dinámico: una variable puede cambiar de tipo en tiempo de ejecución.
nombre = 20; // number
console.log(nombre);

nombre = 'Makilero'; // string
console.log(typeof nombre); // Typeof es un operador que devuelve el tipo de dato de una variable.
console.log(typeof numero);
console.log(typeof esVerdadero);
console.log(typeof nulo); // typeof null devuelve object, esto es un error en Javascript, ya que null no es un objeto, sino un valor primitivo.
console.log(typeof indefinido);