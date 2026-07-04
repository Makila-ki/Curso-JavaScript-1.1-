let i = 2;

// se ejecuta primero la condicion y luego el bloque de codigo
while (i < 2) {
    if (i % 2 == 0) {
        console.log('numero par: ' + i);
    }
    i++;
}

// se ejecuta primero el bloque de codigo y luego la condicion
do {
    if (i % 2 == 0) {
        console.log('numero par: ' + i);
    }
    i++;
} while (i < 2);