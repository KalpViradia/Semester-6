"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductService = void 0;
const common_1 = require("@nestjs/common");
let ProductService = class ProductService {
    products = [
        { id: 1, name: 'Laptop', description: 'High-performance laptop', price: 999.99, stock: 50 },
        { id: 2, name: 'Smartphone', description: 'Latest smartphone model', price: 699.99, stock: 100 },
        { id: 3, name: 'Headphones', description: 'Wireless noise-cancelling headphones', price: 299.99, stock: 75 },
    ];
    idCounter = 4;
    findAll() {
        return this.products;
    }
    findOne(id) {
        const product = this.products.find((p) => p.id === id);
        if (!product) {
            throw new common_1.NotFoundException(`Product with ID ${id} not found`);
        }
        return product;
    }
    create(createProductDto) {
        const newProduct = {
            id: this.idCounter++,
            ...createProductDto,
        };
        this.products.push(newProduct);
        return newProduct;
    }
    update(id, updateProductDto) {
        const productIndex = this.products.findIndex((p) => p.id === id);
        if (productIndex === -1) {
            throw new common_1.NotFoundException(`Product with ID ${id} not found`);
        }
        this.products[productIndex] = {
            ...this.products[productIndex],
            ...updateProductDto,
        };
        return this.products[productIndex];
    }
    delete(id) {
        const productIndex = this.products.findIndex((p) => p.id === id);
        if (productIndex === -1) {
            throw new common_1.NotFoundException(`Product with ID ${id} not found`);
        }
        this.products.splice(productIndex, 1);
        return { message: `Product with ID ${id} deleted successfully` };
    }
};
exports.ProductService = ProductService;
exports.ProductService = ProductService = __decorate([
    (0, common_1.Injectable)()
], ProductService);
//# sourceMappingURL=product.service.js.map