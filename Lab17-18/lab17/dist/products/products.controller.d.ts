interface Product {
    id: number;
    name: string;
    description: string;
    price: number;
    category: string;
}
export declare class ProductsController {
    private products;
    findAll(): Product[];
    findOne(id: string): Product | {
        message: string;
    };
    insert(product: Omit<Product, 'id'>): Product;
    update(id: string, updateData: Partial<Product>): Product | {
        message: string;
    };
    delete(id: string): {
        message: string;
    };
}
export {};
