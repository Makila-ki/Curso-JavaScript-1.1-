function suma(a, b) {
    console.log(arguments); // arguments es un objeto que contiene todos los argumentos que se le pasan a la función.
    return a + b;
}

// argumento 5, que se le pasa a la función suma, que es el parámetro a. 
// La función suma devuelve el valor de a + 2, que es 7. 
// El valor devuelto se almacena en la variable resultado.
let resultado = suma(5, 6, 1, 2, 3); 
console.log(resultado);
console.log(typeof suma);