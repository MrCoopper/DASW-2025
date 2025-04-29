const express = require('express');
const router = express.Router();
const fs = require('fs');
const path = require('path');

// Ruta para obtener todos los productos
router.get('/', (req, res) => {
  fs.readFile(path.join(__dirname, '../data/products.json'), 'utf8', (err, data) => {
    if (err) return res.status(500).send('Error leyendo los productos');
    const products = JSON.parse(data);
    if (req.query.query) {
      const filteredProducts = products.filter(product => product.title.includes(req.query.query));
      return res.status(200).json(filteredProducts);
    }
    res.status(200).json(products);
  });
});

// Ruta para obtener un producto por ID
router.get('/:id', (req, res) => {
  const productId = req.params.id;
  fs.readFile(path.join(__dirname, '../data/products.json'), 'utf8', (err, data) => {
    if (err) return res.status(500).send('Error leyendo los productos');
    const products = JSON.parse(data);
    const product = products.find(p => p.id === productId);
    if (!product) {
      return res.status(404).send('Producto no encontrado');
    }
    res.status(200).json(product);
  });
});

module.exports = router;
