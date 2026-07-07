// let a = {}; // se guardar direcciones.
// let b = a;

// b.prop = 1;
// console.log(a, b);

// let a1 = 1;

// function suma(n){
//     n++
// }

// suma(a1);
// console.log(a1);

let a1 = {prop: 1};

function suma(n){
    n.prop++
}

suma(a1);
console.log(a1);

// los primitivos se copian.
// los referencia se referencian.