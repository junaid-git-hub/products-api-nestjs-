import * as mongoose from 'mongoose'
import { IsEmail, IsDefined, IsNotEmpty, IsString, Length, Matches } from 'class-validator'
//-------mongoose schema----------------------------//
export const RegisterUserSchema=new mongoose.Schema({
    fname:{type:String, required:true},
    lname:{type:String, required:true},
    email:{type:String, required:true},
    password:{type:String, required:true},
    registerdAt:{type:Date,default:new Date()}
})

//-------user registration model-------------------//
export class RegisterData{
    @IsDefined() @IsNotEmpty() @IsString() @Length(1,50) @ Matches(/^[a-z]+$/i)
    fname:String;
    @IsDefined() @IsNotEmpty() @IsString() @Length(1,50) @ Matches(/^[a-z]+$/i)
    lname:String;
    @IsDefined() @IsNotEmpty() @IsEmail()
    email:String;
    @IsDefined() @IsNotEmpty() @IsString() @Length(6,255)
    password:String;
}

//------user login model--------------------------//
export class LoginData{
    @IsDefined() @IsNotEmpty() @IsEmail()
    email:String;
    @IsDefined() @IsNotEmpty() @IsString() @Length(6,255)
    password:String;
}
