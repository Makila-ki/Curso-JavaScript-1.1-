// Funciones son bloques de código que se pueden reutilizar en cualquier momento. 
// Se pueden declarar con la palabra reservada function, seguida del nombre de la función y paréntesis. 
// Dentro de los paréntesis se pueden declarar parámetros, que son variables que se pueden pasar a la 
// función para que realice operaciones con ellas. 
// El bloque de código de la función se encuentra entre llaves {}.
function saludar() {
    console.log("Hola mundo");
}

saludar();

function suma() {
    return 2 + 2;
}

let resultado = suma();
console.log(resultado);
console.log(suma());