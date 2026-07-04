let edad = 11;

// las condiciones se generan de arriba hacia abajo, si la primera es verdadera, las demas no se ejecutan
if (edad > 17) {
    console.log("Eres mayor de edad");
} else if (edad > 12) {
    console.log("Eres un adolescente");
} else {
    console.log("Eres un niño");
}