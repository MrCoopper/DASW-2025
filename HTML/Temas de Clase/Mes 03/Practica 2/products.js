import { generateUUID } from "./utils.js";

export class ProductException extends Error {
  constructor(message) {
    this.message = message;
    this.name = "ProductException";
  }
}

export class Product {
  constructor(
    title,
    description,
    imageUrl,
    unit,
    stock,
    pricePerUnit,
    category
  ) {
    this._uuid = generateUUID();
    this.setTitle(title);
    this.setDescription(description);
    this.setImageUrl(imageUrl);
    this.setUnit(unit);
    this.setStock(stock);
    this.setPricePerUnit(pricePerUnit);
    this.setCategory(category);
  }

  get uuid() {
    return this._uuid;
  }

  get title() {
    return this._title;
  }

  get description() {
    return this._description;
  }

  get imageUrl() {
    return this._imageUrl;
  }

  get unit() {
    return this._unit;
  }

  get stock() {
    return this._stock;
  }

  get pricePerUnit() {
    return this._pricePerUnit;
  }

  get category() {
    return this._category;
  }

  setTitle(title) {
    if (!title || title.trim() === "") {
      throw new ProductException("Title error (String error)");
    }
    this._title = title;
  }

  setDescription(description) {
    if (!description || description.trim() === "") {
      throw new ProductException("Description error (String error)");
    }
    this._description = description;
  }

  setImageUrl(imageUrl) {
    if (!imageUrl || imageUrl.trim() === "") {
      throw new ProductException("ImageURL error (String error)");
    }
    this._imageUrl = imageUrl;
  }

  setUnit(unit) {
    if (!unit || unit.trim() === "") {
      throw new ProductException("Unit error (String error)");
    }
    this._unit = unit;
  }

  setStock(stock) {
    if (stock < 0) {
      throw new ProductException("Stock error (Number error)");
    }
    this._stock = stock;
  }

  setPricePerUnit(pricePerUnit) {
    if (pricePerUnit < 0) {
      throw new ProductException("Price error (Number error)");
    }
    this._pricePerUnit = pricePerUnit;
  }

  setCategory(category) {
    if (!category || category.trim() === "") {
      throw new ProductException("Category error (String error)");
    }
    this._category = category;
  }

  toHTML() {
    return `
            <div class="product">
                <img src="${this.imageUrl}" alt="${this.title}">
                <h3>${this.title}</h3>
                <p>${this.description}</p>
                <p><strong>Price:</strong> $${this.pricePerUnit}</p>
                <p><strong>Category:</strong> ${this.category}</p>
                <p><strong>Stock:</strong> ${this.stock} units</p>
            </div>
        `;
  }

  static createFromJson(jsonValue) {
    const obj = JSON.parse(jsonValue);
    return new Product(
      obj.title,
      obj.description,
      obj.imageUrl,
      obj.unit,
      obj.stock,
      obj.pricePerUnit,
      obj.category
    );
  }

  static createFromObject(obj) {
    return new Product(
      obj.title,
      obj.description,
      obj.imageUrl,
      obj.unit,
      obj.stock,
      obj.pricePerUnit,
      obj.category
    );
  }

  static cleanObject(obj) {
    const validKeys = [
      "title",
      "description",
      "imageUrl",
      "unit",
      "stock",
      "pricePerUnit",
      "category",
    ];
    const cleanObj = {};
    for (const key in obj) {
      if (validKeys.includes(key)) {
        cleanObj[key] = obj[key];
      }
    }
    return cleanObj;
  }
}

export default Product;