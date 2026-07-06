let pairs = [
  [1,{"name": "Nicolas",}],
  [2,{"name": "Mateo",}],
  [3,{"name": "Elena",}]
]

// Como lo realice
function desInterar (arr){
    let nuevoArray = [];
    for(num in arr){
        let elementos = arr[num];
        nuevoArray[num] = {id: elementos[0], name: elementos[1].name}
    }
    return nuevoArray;
}

// function desInterar (arr){
//     let nuevoArray = [];
//     for(num in arr){
//         let elementos = arr[num];
//         nuevoArray[num] = elementos[1];
//         nuevoArray[num].id = elementos[0] 
//     }
//     return nuevoArray;
// }

let resultado = desInterar(pairs);
console.log(resultado)