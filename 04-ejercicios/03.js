function busquedaArray (arr, id){
    let idN = id - 1;
    if(arr.length >= idN && idN !== -1){
        return arr[idN];
    }else {
        return 'Valor no exitente';
    }
}

let resultado = busquedaArray([1,2,3,4], 4);
console.log(resultado);