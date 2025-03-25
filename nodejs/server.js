const { error } = require('console');
const express = require('express');
const fs = require('fs');

const app = express();
const port = 5005;

app.get('/products/:id', (req, res) => {
    const products = JSON.parse(fs.readFileSync('products.json', 'utf-8'));
    const product = products.find(product => product.id === parseInt(req.params.id));
    if(!product) {
        return res.status(404).json({error: 'Product not found'});
    }
    res.json(product);
})

app.get('/products', (req, res) => {
    const queryParams = req.query;
    if (queryParams.name) {
        const products = JSON.parse(fs.readFileSync('products.json', 'utf-8'));
        const product = products.find(product => product.name === queryParams.name)
        if (!product) {
            return res.status(404).json({error: 'Producto no encontrado'});
        }
    } else {
        res.json(products);
    }
})

app.listen(port, () => {
    console.log(`El servidor esta corriendo en el puerto ${port}`);
})

// instalar paquete     npm install <paquete>
// desinstalar paquete  npm uninstall <paquete>

// Explicacion del codigo:
// 1. Importamos los modulos necesarios
// 2. Creamos el servidor
// 3. Definimos el puerto
// 4. Definimos la ruta para obtener un producto por su id
// 5. Iniciamos el servidor