// ----------------------------------------------------------------------------------------------------------------------------------------------------------------|
/*
// Declaracion de un arraeglo de 5 elementos
let array1 = new Array(5);

// Otra froma de declarar un arreglo
let array2 = [];

// Forma de asignar valores a un arreglo
let array3 = [1, 2, 3, 4, 5];

// Tipos de valores que peude tener un arreglo
let array4 = [1, 2, 3, 4, 5, "Hola", true, [1, 2, 3]];

// Reducion de la longitud de un arreglo
array3.length = 4;

// Aumento de la longitud de un arreglo
array3.length = 6;

// Otra forma de declarar un arreglo
let array5 = "uno, dos, tres".split(",");

// ----------------------------------------------------------------------------------------------------------------------------------------------------------------|

// Imprimir los valores de un arreglo

console.log(array1);
// output = [ <5 empty items> ]

console.log(array2);
// output = []

console.log(array3);
// output = [ 1, 2, 3, 4, 5]

console.log(array4[4]);
// output = 5

console.log(Array.isArray(array4));
// output = true

console.log(Array.isArray(array4[7]));
// output = true

console.log(array5);
// output = [ 'uno', ' dos', ' tres' ]

console.log(array3.join(" - "));
// output = 1 - 2 - 3 - 4 - 5

// ----------------------------------------------------------------------------------------------------------------------------------------------------------------|

// Agregar un elemento a un arreglo
array1.push(1);
// output = [ <1 empty item>, 1 ]

// Saca el ultimo elemento de un arreglo
array1.pop();
// output = [ <1 empty item> ]

// Sacar el primer elemento de un arreglo
array1.push(1, 2, 3, 4, 5);
array1.shift();
// output = [ 2, 3, 4, 5 ]

// Agregar un elemento o elementos al principio de un arreglo
array1.unshift(1);
// output = [ 1, 2, 3, 4, 5 ]
*/
// ----------------------------------------------------------------------------------------------------------------------------------------------------------------|


// EJERCICIOS DE ARREGLOS

function main() {
    
    // 1. Crear un arreglo con los nombres de tus peliculas favoritas
    let arrayMovies = ["The Matrix", "The Lord of the Rings", "The Godfather", "The Dark Knight", "The Shawshank Redemption", "Forrest Gump", "The Silence of the Lambs"];

    // Agregar una pelicula al inicio del arreglo
    arrayMovies.unshift("The Godfather II");
    console.log(arrayMovies);

    // Nuevo arreglo con las peliculas favoritas
    let newarrayMovies = [];
    newarrayMovies = changeMovie(arrayMovies)
    console.log(newarrayMovies);
    // output = [ 'The Silence of the Lambs', 'Forrest Gump', 'The Shawshank Redemption', 'The Dark Knight', 'The Godfather', 'The Lord of the Rings', 'The Matrix', 'The Godfather II' ]6

    // Imprimir el arreglo de peliculas
    console.log("\n\tImprimir las peliculas con un ForEach\n");
    printArray(newarrayMovies);

    // Buscar el indice de una pelicula en el arreglo
    let movie = "The Godfather";
    let index = findIndex(newarrayMovies, movie);
    console.log(`\n\n\nIndice de la pelicula ${movie}: ${index}\n`);

    // La primera pelicula del arreglo que su indice sea mayor a 2
    let movieIndex = findIndexBiggerThan(newarrayMovies, 2);
    console.log(`\n\n\nPelicula con indice mayor a 2: ${movieIndex}\n`);

}


function changeMovie(arrayMovies) {
    // Arreglo temporal para guardar las peliculas
    let temparrayMovies = [];
    
    // Recorrer el arreglo de peliculas en orden contrario y guardarlas en el arreglo temporal
    for (let i = arrayMovies.length - 1; i >= 0; i--) {
        temparrayMovies.push(arrayMovies[i]);
    }
    
    // Retornar el arreglo temporal
    return temparrayMovies;
}


function printArray(arrayMovies) {
    // Impresion de los nombres de las peliculas
    console.log("\n\tImprimir las peliculas:\n");
    arrayMovies.forEach((element) => {
        console.log(`Pelicula: ${element}\n`);
    });

    // Impresion de los nombres de las peliculas con su indice
    console.log("\n\tImprimir las peliculas con su indice:\n");
    arrayMovies.forEach((function(element, index) {
        console.log(`Pelicula: ${element}, Indice: ${index}\n`);
    }));
}

function findIndex(arrayMovies, movie) {
    // Buscar el indice de una pelicula en el arreglo
    let index = arrayMovies.findIndex((element) => element === movie);
    return index;
}

function findIndexBiggerThan(arrayMovies, index) {
    // La primera pelicula del arreglo que su indice sea mayor a 2
    let movieIndex = arrayMovies.find((element, index) => index > 2); 
    return movieIndex;
}

main();


// ----------------------------------------------------------------------------------------------------------------------------------------------------------------|

/*
// Acciones con arreglos
let array1 = [1, 2, 3, 4, 5];
let array2 = [6, 7, 8, 9, 10];

let array3 = array1.concat(array2);
console.log(`${array3}\n`);
// output = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ]

let array4 = array3.slice(1, 7);
console.log(`${array4}\n`);	
// output = [ 3, 4, 5, 6, 7 ]

console.log(`Antes: ${array3}\n`);
let array5 = array3.splice(2, 3, 11, 12, 13);
console.log(`Arreglo de splice: ${array5}\n`);
console.log(`Despues: ${array3}\n`);
// output = [ 3, 4, 5 ]

// Eliminar un elemento de un arreglo
delete array3[2];
console.log(`${array3}\n`);
// output = [ 3, 4, <1 empty item>, 6, 7, 8, 9, 10 ]
*/

// ----------------------------------------------------------------------------------------------------------------------------------------------------------------|

/*
let arraeglo = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// Recorrido con forEach especificando el arreglo
console.log("\n\tRecorrido con forEach sin especificar el arreglo\n\n");

arraeglo.forEach((element, index) => {
    console.log(`Elemento: ${element}, Indice: ${index}\n`);
});

// Recorrido con forEach especificando el arreglo
console.log("\n\tRecorrido con forEach especificando el arreglo\n\n");

arraeglo.forEach((function(element, index, array) {
    console.log(`Elemento: ${element}, Indice: ${index}, Arreglo: ${array}\n`);
}));
*/

// ----------------------------------------------------------------------------------------------------------------------------------------------------------------|

/*
let arreglo = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// Buscar un elemento en un arreglo y retornar el indice
console.log(arreglo.indexOf(5));
// output = 4

// Buscar un elemento en un arreglo y retornar true o false
console.log(arreglo.includes(5));
// output = true

// Buscar un elemento en un arreglo mayor a 5
console.log(arreglo.find((element) => element > 5));
// output = 6

// Buscar el indice de un elemento en un arreglo mayor a 5
console.log(arreglo.findIndex((element) => element > 5));
// output = 5
*/