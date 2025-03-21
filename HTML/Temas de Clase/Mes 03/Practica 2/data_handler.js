import { Product, ProductException } from './products.js';

let products = [];

export function getProducts() {
  return products;
}

export function getProductById(uuid) {
  return products.find((product) => product.uuid === uuid);
}

export function createProduct(product) {
  if (!(product instanceof Product)) {
    throw new Error("Producto Invalido");
  }
  products.push(product);
}

export function updateProduct(uuid, updatedProduct) {
  const index = products.findIndex((product) => product.uuid === uuid);
  if (index !== -1) {
    products[index] = updatedProduct;
  } else {
    throw new Error("Producto no encontrado");
  }
}

export function deleteProduct(uuid) {
  const index = products.findIndex((product) => product.uuid === uuid);
  if (index !== -1) {
    products.splice(index, 1);
  } else {
    throw new Error("Producto no encontrado");
  }
}

export function findProduct(query) {
  const [category, title] = query.split(":").map((str) => str.trim());
  return products.filter((product) => {
    const matchesCategory = category
      ? product.category.includes(category)
      : true;
    const matchesTitle = title ? product.title.includes(title) : true;
    return matchesCategory && matchesTitle;
  });
}

export function productListToHTML(lista, htmlElement) {
  const html = lista.map((product) => product.toHTML()).join("");
  htmlElement.innerHTML = html;
}