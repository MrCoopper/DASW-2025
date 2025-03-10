// --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|

// Promesas
// Las promesas son objetos que representan la terminación o el fracaso de una operación asíncrona.

// Las promesas tienen tres estados:
// Pendiente: estado inicial, ni cumplida ni rechazada.
// Cumplida: significa que la operación se completó con éxito.
// Rechazada: significa que la operación falló.

/*
let promise = new Promise((function (resolve, reject){
   setTimeout(() => {
        if (Math.random() < 0.5) {
            console.log("Procesando promesa");
            resolve("Exito");
        } else {
            reject(new Error("Error"));
        }
   }, 2000);
}))
*/

// Explicacion del codigo:
// Creamos una nueva promesa con el constructor Promise.
// La promesa recibe una función con dos parámetros: resolve y reject.
// La función setTimeout simula una operación asíncrona que se completará después de 1 segundo.
// Dentro de la función setTimeout, generamos un número aleatorio entre 0 y 1.
// Si el número es menor que 0.5, llamamos a resolve con el mensaje "Procesando promesa" y "Exito". Esto significa que la promesa se cumplió con éxito.
// Si el número es mayor o igual a 0.5, llamamos a reject con un nuevo objeto Error. Esto significa que la promesa fue rechazada.
// Por lo tanto, la promesa se resolverá con éxito aproximadamente la mitad de las veces y se rechazará la otra mitad.


/*
promise.then(function exito(result) {
    console.log(result);
}, function rechazo(error) {
    console.log(error);
})
*/

// Explicacion del codigo:
// Llamamos al método then de la promesa.
// El método then recibe dos funciones como argumentos: una función de éxito y una función de rechazo.
// La función de éxito se ejecutará si la promesa se resuelve con éxito. Recibe el resultado de la promesa como argumento.
// La función de rechazo se ejecutará si la promesa es rechazada. Recibe el error de la promesa como argumento.
// En este caso, si la promesa se resuelve con éxito, imprimimos el resultado en la consola.
// Si la promesa es rechazada, imprimimos el error en la consola.

// --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|

// Primer ejercicio de promesas:

function tarea1() {
    return new Promise((resolve) => {
        for (let i = 0; i < 5; i++) {
            setTimeout(() => {console.log("Hola");
                if (i === 4) {
                    resolve("Fin de la tarea 1"); // Se resuelve al terminar la tarea
                }
            }, ((i * (i + 1)) / 2) * 1000);
        }
    });
}

function tarea2() {
    return new Promise((resolve) => {
        for (let i = 0; i < 10; i++) {
            setTimeout(() => {console.log("Mundo");
                if (i === 9) {
                    resolve("Fin de la tarea 2"); // Se resuelve al terminar la tarea
                }
            }, i * 1000);
        }
    });
}

Promise.all([tarea1(), tarea2()]).then((resultados) => {
    resultados.forEach(mensaje => console.log(mensaje)); // Imprime los mensajes de finalización
    console.log("Fin");
});

// Explicacion del codigo:
// Definimos dos funciones tarea1 y tarea2 que devuelven promesas.
// En cada función, ejecutamos un ciclo con un setTimeout que imprime "Hola" y "Mundo" respectivamente.
// Al final de cada ciclo, comprobamos si i es igual a 4 o 9, lo que significa que la tarea ha terminado.
// Si la tarea ha terminado, llamamos a resolve con un mensaje de finalización.
// Luego, usamos Promise.all para ejecutar ambas tareas en paralelo.
// Promise.all recibe un array con las promesas que queremos ejecutar.
// Cuando ambas tareas se resuelven, el método then se ejecuta con un array de resultados.
// En este caso, imprimimos los mensajes de finalización de cada tarea y un mensaje "Fin" al final.

// --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|