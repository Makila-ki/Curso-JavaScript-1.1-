/*
    Los objetos son un tipo de dato que nos permite almacenar colecciones de datos y funcionalidades más complejas.
    y que tienen mas sentido ponerlos juntos.
*/

// personaje de tv

let nombre = 'Goku';
let anime = 'Dragon Ball';
let edad = 30;

let personaje = {
    nombre: 'Goku',  //en javascript, los objetos se definen con llaves {} y dentro de ellas se definen las propiedades del objeto, que son pares de clave-valor.
    anime: 'Dragon Ball',
    edad: 30 // En javascript podemos poner o no una coma al final de la última propiedad. 
};

console.log(personaje); // en Javascript Imprime el objeto completo, con todas sus propiedades y valores.
// Ademas de que no posee un orden específico, ya que los objetos son colecciones de datos no ordenadas.

console.log(personaje.nombre); // en Javascript Imprime el valor de la propiedad nombre del objeto personaje.
console.log(personaje['nombre']); // en Javascript Imprime el valor de la propiedad nombre del objeto personaje, 
// pero usando la notación de corchetes. Esta notación es útil cuando el nombre de la propiedad 
// es una variable o contiene caracteres especiales.

personaje.nombre = 'Vegeta'; // en Javascript Modifica el valor de la propiedad nombre del objeto personaje.
personaje['nombre'] = 'Gohan'; // en Javascript Modifica el valor de la propiedad nombre del objeto personaje.

let propiedad = 'nombre'; 
personaje[propiedad] = 'Trunks';

delete personaje.anime; // en Javascript Elimina la propiedad anime del objeto personaje.

console.log(personaje);