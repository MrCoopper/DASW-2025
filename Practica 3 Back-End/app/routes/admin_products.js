const express = require("express");
const router = express.Router();
const fs = require("fs");
const path = require("path");
const { uuid, validateAdmin } = require("../controllers/utils");

// Middleware para autenticar al admin
router.use(validateAdmin);

// Ruta para agregar un nuevo producto
router.post("/", (req, res) => {
  const {
    imageUrl,
    title,
    description,
    unit,
    category,
    pricePerUnit,
    stock,
  } = req.body;

  // Verificar que todos los campos necesarios esten presentes
  if (
    !imageUrl ||
    !title ||
    !description ||
    !unit ||
    !category ||
    !pricePerUnit ||
    !stock
  ) {
    return res.status(400).send("Faltan atributos para crear el producto");
  }

  // Crear un nuevo producto
  const newProduct = {
    id: uuid(),
    imageUrl,
    title,
    description,
    unit,
    category,
    pricePerUnit,
    stock,
  };

  // Leer el archivo products.json
  fs.readFile(path.join(__dirname, "../data/products.json"), "utf8", (err, data) => {
    if (err) return res.status(500).send("Error leyendo los productos");

    const products = JSON.parse(data);
    products.push(newProduct);

    // Guardar los productos actualizados en el archivo
    fs.writeFile(
      path.join(__dirname, "../data/products.json"),
      JSON.stringify(products, null, 2),
      (err) => {
        if (err) return res.status(500).send("Error guardando el producto");
        res.status(201).send(`Producto ${title} creado exitosamente`);
      }
    );
  });
});

// Ruta para editar un producto
router.put("/:id", (req, res) => {
  const productId = req.params.id;
  const { imageUrl, title, description, unit, category, pricePerUnit, stock } = req.body;

  // Verificar que todos los campos necesarios esten presentes
  if (
    !imageUrl ||
    !title ||
    !description ||
    !unit ||
    !category ||
    !pricePerUnit ||
    !stock
  ) {
    return res.status(400).send("Faltan atributos para actualizar el producto");
  }

  // Leer el archivo products.json
  fs.readFile(path.join(__dirname, "../data/products.json"), "utf8", (err, data) => {
    if (err) return res.status(500).send("Error leyendo los productos");

    let products = JSON.parse(data);

    // Buscar el producto con el ID
    const productIndex = products.findIndex((p) => p.id === productId);
    if (productIndex === -1) {
      return res.status(404).send("Producto no encontrado");
    }

    // Actualizar los detalles del producto
    products[productIndex] = {
      ...products[productIndex],
      imageUrl,
      title,
      description,
      unit,
      category,
      pricePerUnit,
      stock,
    };

    // Guardar los cambios en el archivo
    fs.writeFile(
      path.join(__dirname, "../data/products.json"),
      JSON.stringify(products, null, 2),
      (err) => {
        if (err)
          return res.status(500).send("Error guardando el producto actualizado");
        res.status(200).send(`Producto ${title} actualizado exitosamente`);
      }
    );
  });
});

// Ruta para borrar un producto
router.delete("/:id", (req, res) => {
  const productId = req.params.id;

  // Leer el archivo products.json
  fs.readFile(path.join(__dirname, "../data/products.json"), "utf8", (err, data) => {
    if (err) return res.status(500).send("Error leyendo los productos");

    let products = JSON.parse(data);

    // Buscar el producto con el ID
    const productIndex = products.findIndex((p) => p.id === productId);
    if (productIndex === -1) {
      return res.status(404).send("Producto no encontrado");
    }

    // Eliminar el producto
    const deletedProduct = products.splice(productIndex, 1);

    // Guardar los cambios en el archivo
    fs.writeFile(
      path.join(__dirname, "../data/products.json"),
      JSON.stringify(products, null, 2),
      (err) => {
        if (err) return res.status(500).send("Error eliminando el producto");
        res
          .status(200)
          .send(`Producto ${deletedProduct[0].title} eliminado exitosamente`);
      }
    );
  });
});

module.exports = router;
