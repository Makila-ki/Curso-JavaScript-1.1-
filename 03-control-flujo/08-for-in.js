let user = {
    id: 1,
    name: 'Marco',
    age: 25,
}

for (let prop in user){
    console.log(prop, user[prop]);
}

let animales = ['perro', 'gato', 'perico', 'loro'];

for (let indice in animales) {
    console.log(indice, animales[indice]);
}