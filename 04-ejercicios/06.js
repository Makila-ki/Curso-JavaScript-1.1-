let array = [2,-45,45,3,89,-87,-89,762,-12];

function contadorPositivos (arr){
    let contadorPosi = 0;
    for (num of arr){
        contadorPosi = num > 0 ? contadorPosi + 1: contadorPosi;
    }
    return contadorPosi
}

let resultado = contadorPositivos(array);
console.log(resultado);