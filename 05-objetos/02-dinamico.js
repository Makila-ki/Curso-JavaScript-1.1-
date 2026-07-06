const user = { id: 1};

user.name = 'Marco';
user.guardar = function () {
    console.log('Guardando', user.name);
}

user.guardar();

delete user.name;
delete user.guardar;

console.log(user);

const user1 = Object.seal({ id: 1}); // SI queres solo cambiar los valores.
// const user1 = Object.freeze({ id: 1});// si no queremos que se altere nada.
user1.name = 'Maki';
user1.id = 2;
console.log(user1);