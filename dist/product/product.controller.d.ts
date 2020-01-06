import { Product, Id, UpdateProduct } from './product.model';
import { ProductService } from './product.service';
export declare class ProductController {
    private readonly productService;
    constructor(productService: ProductService);
    addProduct(receivedData: Product): Promise<string>;
    getProducts(): Promise<Product[]>;
    getProduct(id: Id): Promise<Product>;
    updateProduct(id: Id, receivedData: UpdateProduct): Promise<Product>;
    deleteProduct(id: Id): Promise<any>;
}
