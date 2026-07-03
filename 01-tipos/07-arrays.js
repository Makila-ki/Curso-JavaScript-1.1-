let animales = ['perro', 'gato'];
console.log(animales); // Muestra el array completo. con el mismo orden en que se definió.
console.log(animales[0]);

animales[2] = 'pez'; // Agrega un nuevo elemento al array en la posición 2.
console.log(animales);

animales[8] = 'loro'; // Agrega un nuevo elemento al array en la posición 8. Esto genera un "hueco" en el array, ya que las posiciones 3, 4, 5, 6 y 7 quedan vacías.
console.log(animales[7]); // Muestra undefined, ya que la posición 7 está vacía.

console.log(typeof animales); // Muestra que el tipo de dato es object, ya que los arrays son un tipo de objeto en Javascript.
console.log(animales.length); // Muestra la longitud del array, es decir, el número de elementos que contiene.