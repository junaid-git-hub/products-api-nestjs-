import * as mongoose from 'mongoose';
import { IsString, Length, IsNumber, IsUrl, IsMongoId, IsOptional, IsDefined,  IsNotEmpty, Matches } from 'class-validator'
//mongodb+srv://junaid:<password>@cluster0-n6cvo.mongodb.net/test?retryWrites=true&w=majority
export const ProductSchema=new mongoose.Schema({
    title:{type:String, required:true},
    type:{type:String,required:true},
    price:{type:Number,required:true},
    imgUrl:{type:String,required:true}
})

export class Product{
    @IsOptional()
    @IsMongoId()
    _id?: String;
    @IsDefined() @IsNotEmpty() @IsString() @Length(1,50) @Matches(/^[a-z 0-9 ' ']+$/i)
    title: String;
    @IsDefined() @IsNotEmpty() @IsString() @Length(1,50) @Matches(/^[a-z 0-9 ' ']+$/i)
    type: String;
    @IsDefined() @IsNotEmpty() @IsNumber()
    price: Number;
    @IsDefined() @IsNotEmpty() @IsUrl() 
    imgUrl:String
}

export class UpdateProduct{
    @IsOptional()
    @IsString() @Length(1,50) @Matches(/^[a-z 0-9 ' ']+$/i)
    title?: String;
    @IsOptional()
    @IsString() @Length(1,50) @Matches(/^[a-z 0-9 ' ']+$/i)
    type?: String;
    @IsOptional()
    @IsNumber() 
    price: Number;
    @IsOptional()
    @IsUrl()
    imgUrl?:String
}

export class Id{
    @IsMongoId()
    id:String;
}