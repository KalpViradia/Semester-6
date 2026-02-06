import { ProductService } from './product.service';
import type { Product } from './product.service';
import { CreateProductDto, UpdateProductDto } from './dto/product.dto';
export declare class ProductController {
    private readonly productService;
    constructor(productService: ProductService);
    findAll(): Product[];
    findOne(id: number): Product;
    create(createProductDto: CreateProductDto): Product;
    update(id: number, updateProductDto: UpdateProductDto): Product;
    delete(id: number): {
        message: string;
    };
}
