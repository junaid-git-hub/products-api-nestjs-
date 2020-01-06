import { Controller, Post, Body, Get, Param, Put, Delete, UseGuards } from '@nestjs/common';
import { Product, Id, UpdateProduct } from './product.model';
import { ProductService } from './product.service';
import { ValidationPipe } from './pipes/product-validation.pipe';
import { ProductAuthGuard } from './guards/product-route.guards';

@UseGuards(ProductAuthGuard)
@Controller('product')
export class ProductController {
    constructor(private readonly productService:ProductService){}
    @Post()
    addProduct(@Body(new ValidationPipe()) receivedData:Product):Promise<string>{
        const details:Product={
            title:receivedData.title,
            type:receivedData.type,
            price:receivedData.price,
            imgUrl:receivedData.imgUrl
        }
        return this.productService.addProduct(details)
    }

    @Get()
    getProducts():Promise<Product[]>{
        return this.productService.getProducts();
    }
    
    @Get(':id')
    getProduct(@Param(new ValidationPipe()) id:Id):Promise<Product>{
        return this.productService.getProduct(id);
    }

    @Put(':id')
    updateProduct(@Param(new ValidationPipe()) id:Id,@Body(new ValidationPipe()) receivedData:UpdateProduct):Promise<Product>{
        const details:Product={
            title:receivedData.title,
            type:receivedData.type,
            price:receivedData.price,
            imgUrl:receivedData.imgUrl
        }
        return this.productService.updateProduct(id,details);
    }

    @Delete(':id')
    deleteProduct(@Param(new ValidationPipe()) id:Id):Promise<any>{
        return this.productService.deleteProduct(id);
    }


}
