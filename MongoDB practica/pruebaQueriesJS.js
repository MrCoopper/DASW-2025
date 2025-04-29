// Insertar varios elementos en una colección de MongoDB usando Node.js y Mongoose

async function conectar1() {
    await coleccion1.insertMany([
        { nombre: "Producto 1", precio: 10 },
        { nombre: "Producto 2", precio: 20 },
        { nombre: "Producto 3", precio: 30 },
        { nombre: "Producto 4", precio: 40 },
        { nombre: "Producto 5", precio: 50 },
        { nombre: "Producto 6", precio: 60 },
        { nombre: "Producto 7", precio: 70 },
        { nombre: "Producto 8", precio: 80 },
        { nombre: "Producto 9", precio: 90 },
        { nombre: "Producto 10", precio: 100 }
    ]);
}

console.log("Productos insertados exitosamente");





// Insertar un solo elemento en una colección de MongoDB usando Node.js y Mongoose

async function buscar2() {
    await coleccion2.insertOne({ nombre: "Producto 1", precio: 10 });
}

console.log("Producto insertado exitosamente");