import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Param,
  Body,
} from '@nestjs/common';

interface Product {
  id: number;
  name: string;
  description: string;
  price: number;
  category: string;
}

@Controller('products')
export class ProductsController {
  private products: Product[] = [
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

  @Get()
  findAll(): Product[] {
    return this.products;
  }

  @Get(':id')
  findOne(@Param('id') id: string): Product | { message: string } {
    const product = this.products.find((p) => p.id === parseInt(id));
    if (!product) {
      return { message: `Product with id ${id} not found` };
    }
    return product;
  }

  @Post()
  insert(@Body() product: Omit<Product, 'id'>): Product {
    const newId = Math.max(...this.products.map((p) => p.id), 0) + 1;
    const newProduct: Product = { id: newId, ...product };
    this.products.push(newProduct);
    return newProduct;
  }

  @Put(':id')
  update(
    @Param('id') id: string,
    @Body() updateData: Partial<Product>,
  ): Product | { message: string } {
    const index = this.products.findIndex((p) => p.id === parseInt(id));
    if (index === -1) {
      return { message: `Product with id ${id} not found` };
    }
    this.products[index] = { ...this.products[index], ...updateData };
    return this.products[index];
  }

  @Delete(':id')
  delete(@Param('id') id: string): { message: string } {
    const index = this.products.findIndex((p) => p.id === parseInt(id));
    if (index === -1) {
      return { message: `Product with id ${id} not found` };
    }
    this.products.splice(index, 1);
    return { message: `Product with id ${id} deleted successfully` };
  }
}
