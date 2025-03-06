// Programación asíncrona

// ----------------------------------------------------------------------------------------------------------------------------------------|

for (let i = 0; i < 5; i++) {
    setTimeout(() => {console.log("Hola");}, ((i * (i + 1)) / 2) * 1000);
}

/*
Este ciclo se ejecuta 5 veces (i va desde 0 hasta 4).
En cada iteración del ciclo, se ejecuta un setTimeout que va a imprimir "Hola" en la consola después de un retraso.
El retraso para cada impresión se calcula de esta forma: (i * (i + 1) / 2) * 1000. Vamos a desglosarlo:
(i * (i + 1) / 2) es la fórmula para la suma de los primeros i números. Esto genera un retraso incremental para cada iteración del ciclo.
Luego, multiplicamos este valor por 1000 para convertirlo de segundos a milisegundos.
El retraso para cada valor de i será:
Para i = 0: (0 * (0 + 1) / 2) * 1000 = 0 * 1000 = 0 ms
Para i = 1: (1 * (1 + 1) / 2) * 1000 = (1 * 2 / 2) * 1000 = 1 * 1000 = 1000 ms
Para i = 2: (2 * (2 + 1) / 2) * 1000 = (2 * 3 / 2) * 1000 = 3 * 1000 = 3000 ms
Para i = 3: (3 * (3 + 1) / 2) * 1000 = (3 * 4 / 2) * 1000 = 6 * 1000 = 6000 ms
Para i = 4: (4 * (4 + 1) / 2) * 1000 = (4 * 5 / 2) * 1000 = 10 * 1000 = 10000 ms
Así que "Hola" se imprimirá en la consola con estos retrasos:

En el segundo 0
En el segundo 1
En el segundo 3
En el segundo 6
En el segundo 10
*/

// ----------------------------------------------------------------------------------------------------------------------------------------|

for (let i = 0; i < 10; i++) {
  setTimeout(() => {console.log("Mundo");}, i * 1000);
}

/*
Este ciclo se ejecuta 10 veces (i va desde 0 hasta 9).
En cada iteración, se ejecuta un setTimeout que va a imprimir "Mundo" en la consola después de un retraso de i * 1000 milisegundos.
El retraso para cada valor de i será:
Para i = 0: 0 * 1000 = 0 ms
Para i = 1: 1 * 1000 = 1000 ms
Para i = 2: 2 * 1000 = 2000 ms
Para i = 3: 3 * 1000 = 3000 ms
Y así sucesivamente hasta i = 9, donde el retraso será de 9 * 1000 = 9000 ms.
Así que "Mundo" se imprimirá en la consola con estos retrasos:

En el segundo 0
En el segundo 1
En el segundo 2
En el segundo 3
En el segundo 4
En el segundo 5
En el segundo 6
En el segundo 7
En el segundo 8
En el segundo 9
*/

// ----------------------------------------------------------------------------------------------------------------------------------------|
