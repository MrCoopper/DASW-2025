import { getProductById } from "./data_handler.js"; 

export class ShoppingCartException extends Error {
    constructor(message) {
        super(message);
        this.name = "CartException";
    }
}

export class ProductProxy {
    constructor(productUuid, amount) {
        this.productUuid = productUuid;
        this.amount = amount;
    }
}

export class ShoppingCart {
    #cartItems = [];
    #productList = [];

    addItem(productUuid, amount) {
        const existingItem = this.#cartItems.find(item => item.productUuid === productUuid);
        if (existingItem) {
            existingItem.amount += amount;
        } else {
            this.#cartItems.push(new ProductProxy(productUuid, amount));
        }
    }

    updateItem(productUuid, newAmount) {
        const item = this.#cartItems.find(item => item.productUuid === productUuid);
        if (!item) 
            throw new ShoppingCartException("Producto no encontrado en el carrito.");
        
        if (newAmount < 0) 
            throw new ShoppingCartException("La cantidad no puede ser negativa.");

        if (newAmount === 0) {
            this.removeItem(productUuid);
        } else {
            item.amount = newAmount;
        }
    }

    removeItem(productUuid) {
        this.#cartItems = this.#cartItems.filter(item => item.productUuid !== productUuid);
    }

    calculateTotal() {
        return this.#cartItems.reduce((total, item) => {
            const product = getProductById(item.productUuid);
            return total + (product ? product.pricePerUnit * item.amount : 0);
        }, 0);
    }

    showCart() {
        return this.#cartItems.map(item => {
            const product = getProductById(item.productUuid);
            return {
                nombre: product?.title || "Producto no encontrado",
                cantidad: item.amount,
                precioUnitario: product?.pricePerUnit || 0,
                total: product ? product.pricePerUnit * item.amount : 0
            };
        });
    }
}

export default ShoppingCart;