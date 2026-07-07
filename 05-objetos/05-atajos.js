let obj = {};
let obj2 = new Object();

/*
new Array(); []
new String(); "" '' ``
new Number(); 1215
new Boolean(); true false
**/

function Usuario () {
    this.name = 'Makilero';
}

let user = new Usuario();
console.log(user.constructor);

let s1 = "1 + 1";
let s2 = new String("1 + 1");
console.log(eval(s1), eval(s2));
console.log(s2.valueOf());