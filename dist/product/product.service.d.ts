import { Product, Id, UpdateProduct } from './product.model';
import { Model } from 'mongoose';
export declare class ProductService {
    private readonly ProductModel;
    constructor(ProductModel: Model<Product>);
    addProduct(details: Product): Promise<string>;
    getProducts(): Promise<Product[]>;
    getProduct(id: Id): Promise<Product>;
    updateProduct(id: Id, details: UpdateProduct): Promise<Product>;
    deleteProduct(id: Id): Promise<any>;
}
