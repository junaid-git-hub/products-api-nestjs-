import { Injectable, NotFoundException } from '@nestjs/common';
import { Product, Id, UpdateProduct } from './product.model';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose'
@Injectable()
export class ProductService {
    constructor(@InjectModel('Product') private readonly ProductModel: Model<Product>){}
    async addProduct(details: Product):Promise<string>{
        const newProduct=new this.ProductModel(details);
        const result= await newProduct.save();
        return result._id;
    }
    async getProducts():Promise<Product[]>{
        return await this.ProductModel.find().select({_id:true,title:true,type:true,price:true,imgUrl:true});
    }

    async getProduct(id:Id):Promise<Product>{
        const result=await this.ProductModel.findById(id.id);
        if(!result) throw new NotFoundException('No Record Found');
        return result;
    }

    async updateProduct(id:Id,details:UpdateProduct):Promise<Product>{
        let result=await this.ProductModel.findById(id.id);
        if(!result) throw new NotFoundException('No Record Found');
        if(details.title) result.title=details.title;
        if(details.type) result.type=details.type;
        if(details.price) result.price=details.price;
        if(details.imgUrl) result.imgUrl=details.imgUrl;
        result=await result.save();
        return result;
    }

    async deleteProduct(id:Id):Promise<any>{
        const result= await this.ProductModel.deleteOne({_id:id.id});
        if(result.n==0) throw new NotFoundException('No Record Found');
        return {mesage:'Deleted Successfully'};
    }


}
