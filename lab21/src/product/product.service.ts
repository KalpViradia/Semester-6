import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateProductDto, UpdateProductDto } from './dto/product.dto';

export interface Product {
  id: number;
  name: string;
  description: string;
  price: number;
  stock: number;
}

@Injectable()
export class ProductService {
  private products: Product[] = [
    { id: 1, name: 'Laptop', description: 'High-performance laptop', price: 999.99, stock: 50 },
    { id: 2, name: 'Smartphone', description: 'Latest smartphone model', price: 699.99, stock: 100 },
    { id: 3, name: 'Headphones', description: 'Wireless noise-cancelling headphones', price: 299.99, stock: 75 },
  ];

  private idCounter = 4;

  findAll(): Product[] {
    return this.products;
  }

  findOne(id: number): Product {
    const product = this.products.find((p) => p.id === id);
    if (!product) {
      throw new NotFoundException(`Product with ID ${id} not found`);
    }
    return product;
  }

  create(createProductDto: CreateProductDto): Product {
    const newProduct: Product = {
      id: this.idCounter++,
      ...createProductDto,
    };
    this.products.push(newProduct);
    return newProduct;
  }

  update(id: number, updateProductDto: UpdateProductDto): Product {
    const productIndex = this.products.findIndex((p) => p.id === id);
    if (productIndex === -1) {
      throw new NotFoundException(`Product with ID ${id} not found`);
    }
    this.products[productIndex] = {
      ...this.products[productIndex],
      ...updateProductDto,
    };
    return this.products[productIndex];
  }

  delete(id: number): { message: string } {
    const productIndex = this.products.findIndex((p) => p.id === id);
    if (productIndex === -1) {
      throw new NotFoundException(`Product with ID ${id} not found`);
    }
    this.products.splice(productIndex, 1);
    return { message: `Product with ID ${id} deleted successfully` };
  }
}
