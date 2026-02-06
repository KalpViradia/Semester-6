import { CreateProductDto, UpdateProductDto } from './dto/product.dto';
export interface Product {
    id: number;
    name: string;
    description: string;
    price: number;
    stock: number;
}
export declare class ProductService {
    private products;
    private idCounter;
    findAll(): Product[];
    findOne(id: number): Product;
    create(createProductDto: CreateProductDto): Product;
    update(id: number, updateProductDto: UpdateProductDto): Product;
    delete(id: number): {
        message: string;
    };
}
