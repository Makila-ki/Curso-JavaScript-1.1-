// Datos en duro
// let email = 'maki@gmail.com';
// let name = 'Marco';
// let direccion = {
//     calle: 'Queen st',
//     numero: 15,
// }

// POO, programacion orientada a obejtos.
let user = {
    email: 'maki@gmail.com',
    name: 'Marco',
    direccion: { // podemos colocar objetos dentro de objetos
        calle: 'Queen st',
        numero: 15,
    },
    activo: true,
    recuperarClave: function () {
        console.log('recuperando clave...');
    },
}