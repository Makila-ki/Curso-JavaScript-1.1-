// let user = {
//     id: 1,
//     email: 'maki@gmail.com',
//     name: 'Marco',
//     activo: true,
//     recuperarClave: function () {
//         console.log('recuperando clave...');
//     },
// };

// let user = {
//     id: 2,
//     email: 'mali@gmail.com',
//     name: 'Mali',
//     activo: false,
//     recuperarClave: function () {
//         console.log('recuperando clave...');
//     },
// }

function crearUsuario(name, email) {
    return {
        email,
        name,
        activo: true,
        recuperarClave: function () {
            console.log('recuperando clave...');
        },
    };
}

let user1 = crearUsuario('Marco', 'maki@gmail.com');
let user2 = crearUsuario('Mali', 'mali@gmail.com');
console.log(user1, user2)