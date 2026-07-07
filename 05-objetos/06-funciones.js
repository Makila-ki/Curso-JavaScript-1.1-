function Usuario(nombre) { //Las funciones son objetos de primera clase
    this.nombre = nombre;
}

console.log(Usuario.name);
console.log(Usuario.length);

const U = Usuario;
let user = new U('Maki');

console.log(user);

function of(Fn, arg) {
    return new Fn(arg);
}

let user1 = of(Usuario, 'Mali');
console.log(user1);

function returner() {
    return function() {
        console.log('hola mundo');
    }
}

let saludo = returner();
saludo();