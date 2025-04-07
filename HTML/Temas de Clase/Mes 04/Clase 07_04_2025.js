// Ejemplo 1: Obteniendo elementos con getElementsByTagName (retorna HTMLCollection)
let parrafosHTML = document.getElementsByTagName("p");

// HTMLCollection es una colección "en vivo" y no es un arreglo real,
// por lo que no podemos usar métodos como forEach directamente.
console.log("Número de párrafos (HTMLCollection):", parrafosHTML.length);

// Se puede iterar usando un ciclo for...of:
for (let parrafo of parrafosHTML) {
    console.log("Texto del párrafo (HTMLCollection):", parrafo.textContent);
}

// Si necesitamos tratarlo como arreglo, usamos Array.from():
let arrayParrafos = Array.from(parrafosHTML);
arrayParrafos.forEach((parrafo) => {
    console.log("Texto del párrafo convertido a arreglo:", parrafo.innerText);
});

// Ejemplo 2: Obteniendo elementos con querySelectorAll (retorna NodeList)
let parrafosNodeList = document.querySelectorAll("p");

// NodeList permite el uso directo de forEach
console.log("Número de párrafos (NodeList):", parrafosNodeList.length);
parrafosNodeList.forEach((parrafo) => {
    console.log("Texto del párrafo (NodeList):", parrafo.textContent);
});

agregarParrafo();

function agregarParrafo() {ñgit
    const nuevoParrafo = document.createElement("p");
    nuevoParrafo.textContent = "Nuevo párrafo agregado";
    document.body.appendChild(nuevoParrafo);

    console.log("Después de agregar (HTMLCollection):", parrafosHTML.length);
    console.log("Después de agregar (NodeList):", parrafosNodeList.length);

    // Verifica si NodeList se actualiza (no debería)
    parrafosNodeList.forEach(p => console.log("NodeList:", p.textContent));

    // Verifica si HTMLCollection se actualiza (sí debería)
    for (let p of parrafosHTML) {
        console.log("HTMLCollection:", p.textContent);
    }

    // Modificar elemento de los parrafos del documento
    parrafosNodeList[0].textContent = "Modificado por NodeList";
    parrafosHTML[0].textContent = "Modificado por HTMLCollection";

    for (let p of parrafosNodeList) {
        console.log("NodeList:", p.textContent);
    }

    for (let p of parrafosHTML) {
        console.log("HTMLCollection:", p.textContent);
    }
}


// Diferencia entre HTMLCollection y NodeList
// 1. HTMLCollection:
// - Es una colección "en vivo" que se actualiza dinámicamente.
// - No es un arreglo real, por lo que no soporta métodos como forEach.
// - Se obtiene con getElementsByTagName.

// 2. NodeList:
// - Métodos como querySelector, querySelectorAll.
// - Se actualiza dinámicamente al modificar el DOM.
// - Soporta forEach.