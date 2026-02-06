"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductsController = void 0;
const common_1 = require("@nestjs/common");
let ProductsController = class ProductsController {
    products = [
        {
            id: 1,
            name: 'Laptop',
            description: 'High-performance laptop',
            price: 999.99,
            category: 'Electronics',
        },
        {
            id: 2,
            name: 'Headphones',
            description: 'Wireless noise-cancelling headphones',
            price: 199.99,
            category: 'Electronics',
        },
        {
            id: 3,
            name: 'Desk Chair',
            description: 'Ergonomic office chair',
            price: 299.99,
            category: 'Furniture',
        },
    ];
    findAll() {
        return this.products;
    }
    findOne(id) {
        const product = this.products.find((p) => p.id === parseInt(id));
        if (!product) {
            return { message: `Product with id ${id} not found` };
        }
        return product;
    }
    insert(product) {
        const newId = Math.max(...this.products.map((p) => p.id), 0) + 1;
        const newProduct = { id: newId, ...product };
        this.products.push(newProduct);
        return newProduct;
    }
    update(id, updateData) {
        const index = this.products.findIndex((p) => p.id === parseInt(id));
        if (index === -1) {
            return { message: `Product with id ${id} not found` };
        }
        this.products[index] = { ...this.products[index], ...updateData };
        return this.products[index];
    }
    delete(id) {
        const index = this.products.findIndex((p) => p.id === parseInt(id));
        if (index === -1) {
            return { message: `Product with id ${id} not found` };
        }
        this.products.splice(index, 1);
        return { message: `Product with id ${id} deleted successfully` };
    }
};
exports.ProductsController = ProductsController;
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Array)
], ProductsController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Object)
], ProductsController.prototype, "findOne", null);
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Object)
], ProductsController.prototype, "insert", null);
__decorate([
    (0, common_1.Put)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", Object)
], ProductsController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Object)
], ProductsController.prototype, "delete", null);
exports.ProductsController = ProductsController = __decorate([
    (0, common_1.Controller)('products')
], ProductsController);
//# sourceMappingURL=products.controller.js.map