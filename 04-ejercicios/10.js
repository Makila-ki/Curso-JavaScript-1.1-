let longitud = 7;

function generacionArray (num) {
    if(num <= 0){
        return 'numero menor o igual a cero intenta otra vez';
    }
    let nuevoArray = [];
    for(let i = 0; i < num; i++){
        nuevoArray[i] = i+1;
    }
    return nuevoArray;
}

let resultado = generacionArray(longitud);
console.log(resultado);