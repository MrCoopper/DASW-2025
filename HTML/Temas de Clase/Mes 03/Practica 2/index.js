import { Product } from "./products.js";
import { ShoppingCart } from "./shopping_cart.js";
import { createProduct, getProducts, updateProduct, deleteProduct, findProduct} from "./data_handler.js";

function createTestProducts() {
  const product1 = new Product("Laptop", "Una laptop potente", "laptop.jpg", "pieza", 10, 1000, "Tecnología");
  createProduct(product1);
  console.log("Producto creado:", product1);
}

function testCreateProduct() {
  try {
    const newProduct = new Product("Smartphone", "Smartphone de alta gama", "smartphone.jpg", "pieza", 20, 500, "Tecnología");
    createProduct(newProduct);
    console.log("Producto creado:", newProduct);
  } catch (error) {
    console.error("Error al crear producto:", error.message);
  }
}

function testUpdateProduct() {
  const product = getProducts()[0];
  if (product) {
    const updatedProduct = new Product("Laptop", "Laptop actualizada", "laptop_actualizada.jpg", "pieza", 20, 900, "Tecnología");
    updateProduct(product.uuid, updatedProduct);
    console.log("Producto actualizado:", updatedProduct);
  }
}

function testShoppingCart() {
  const cart = new ShoppingCart();
  const product1 = getProducts()[0];

  cart.addItem(product1.uuid, 2);
  console.log("Carrito después de agregar producto:", cart.showCart());

  const total = cart.calculateTotal();
  console.log("Total del carrito:", total);
}

function runTests() {
  console.clear();
  createTestProducts();
  testCreateProduct();
  testUpdateProduct();
  testShoppingCart();
}

runTests();