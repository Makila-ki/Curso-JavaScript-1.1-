// short-circuit

// que valores son falsos. (falsy)
// console.log(false); // false
// console.log(0); // 0
// console.log(''); // cadena vacía
// console.log(null); // null
// console.log(undefined); // undefined
// console.log(NaN); // NaN

let nombre = 'Makilero';
let username = nombre || 'Anonimo'; // si nombre es falsy, entonces username será 'Anonimo'
console.log(username); // Anonimo

function fn1() {
    console.log('Soy funcion fn1');
    return false;
}

function fn2() {
    console.log('Soy funcion fn2');
    return true;
}

let resultado = fn1() && fn2(); // si fn1() es falsy, entonces no se ejecuta fn2()