// La primera letra siempre es en mayuscula.

function Usuario (){
    this.id = 1;
    this.recuperarClave = function () { // metodo
        console.log('recuperando clave');
    }
}


let usuario = new Usuario();
// se crea un objeto literal
// se vincula el prototipo de la funcion  con el obejto que se acaba de crear
// a this se le agrrega el objeto
// retorna de manera automatica this si no se retorna algo antes.
console.log(usuario);