const { MongoClient } = require('mongodb');

async function main() {
    const uri = "mongodb://localhost:27017";
    const client = new MongoClient(uri);

    try {
        await client.connect();
        console.log("Conectado a MongoDB");

        const db = client.db("Mi base de datos");
        const collection = db.collection("productos");

    }catch (error) {
        console.error("Error al conectar a MongoDB", error);
    }
    finally {
        await client.close();
        console.log("Conexión cerrada");
    }
}

main().catch(console.error);


/*
    Explicacion del codigo:

    - Se importa el cliente de MongoDB.
    - Se define la funcion principal que se ejecutara al iniciar el script.
    - Se define la URI de conexion a MongoDB.
    - Se crea una instancia del cliente de MongoDB.
    - Se intenta conectar a la base de datos.
    - Se obtiene la base de datos y la coleccion deseada.
    - Se manejan los errores de conexion.
    - Se cierra la conexion al finalizar.
    - Se ejecuta la funcion principal y se manejan los errores.
    - Se imprime un mensaje de exito o error en la consola.
*/

