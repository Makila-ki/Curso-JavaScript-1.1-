let array = [
    {
        id: 1,
        name: 'Nicolas',
    },
    {
        id: 2,
        name: 'Mateo',
    },
    {
        id: 3,
        name: 'Elena',
    }
]

// Esta fue mi forma de resolverlo pero no erala adecuada ni la mas optima.
// function toPairs(arr) {
//     let nuevoArray = [];
//     let i = 0;
//     for (num of arr){
//         nuevoArray[i] = [i+1, num];
//         i++
//     }
//     return nuevoArray;
// }

function toPairs(arr) {
    let nuevoArray = [];
    for (num in arr){
        let elemento = arr[num];
        nuevoArray[num] = [elemento.id, elemento];
    }
    return nuevoArray;
}

let resultado = toPairs(array);
console.log(resultado);