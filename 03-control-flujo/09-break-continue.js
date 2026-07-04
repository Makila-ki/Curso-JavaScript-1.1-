let i = 0;

// estos continue y break sirven para ejecutarse con while, for y do while
while (i < 6) {
    i++;
    if (i === 2){
        continue; // sirve para saltar los datos.
    }
    if (i === 4){
        break; // detener el proceso.
    }
    console.log(i);
}