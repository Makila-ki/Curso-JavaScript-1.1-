let array = [83, 383, 44, 80, 1, 200, -5];

function menorMayor(arr) {
    let menor;
    let mayor; 
    let i = 1;
    while (i < arr.length){
        if(i !== 1){
            mayor = mayor < arr[i] ? arr[i] : mayor;
            menor = menor > arr[i] ? arr[i] : menor;
        }else {
            mayor = arr[0] >= arr[1] ? arr[0] : arr[1];
            menor = arr[0] <= arr[1] ? arr[0] : arr[1];
        }
        i++;
    }
    return[mayor, menor];
}

let numeros = menorMayor(array);
console.log(numeros);