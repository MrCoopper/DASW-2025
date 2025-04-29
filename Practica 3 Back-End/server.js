const express = require('express');
const fs = require('fs');
const path = require('path');
const app = express();
const port = 3000;

app.use(express.json());

const productsRouter = require('./app/routes/products');
const adminProductsRouter = require('./app/routes/admin_products');

app.use('/products', productsRouter);
app.use('/admin/products', adminProductsRouter);

app.get('/', (req, res) => {
  res.send('e-commerce app práctica 3');
});

app.get('/home', (req, res) => {
  res.sendFile(path.join(__dirname, 'app/views/home.html'));
});

app.get('/shopping_cart', (req, res) => {
  res.sendFile(path.join(__dirname, 'app/views/shopping_cart.html'));
});

app.listen(port, () => {
  console.log(`Servidor corriendo en http://localhost:${port}`);
});
