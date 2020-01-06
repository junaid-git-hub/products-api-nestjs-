import { Injectable, BadRequestException } from "@nestjs/common";
import { RegisterData, LoginData } from './user-authentication.model';
import { Model } from 'mongoose';
import { InjectModel } from "@nestjs/mongoose";
import * as bcrypt from 'bcryptjs';
import * as jwt from 'jsonwebtoken';
@Injectable()
export class UserAuthenticationService{
    constructor(@InjectModel('Register_User') private registerUser: Model<RegisterData>){}
    async register(details:RegisterData){
        const alreayExists= await this.registerUser.findOne({email:details.email})
        if(alreayExists) throw new BadRequestException('Email is already taken')
        details.password=await bcrypt.hash(details.password,2)
        const newUser= new this.registerUser(details)
        const result=await newUser.save();
        return {id:result._id}
    }
    async login(details:LoginData){
        const user= await this.registerUser.findOne({email:details.email})
        if(!user) throw new BadRequestException('Invalid Email and/or Password')
        const result=await bcrypt.compare(details.password,user.password)
        if(!result) throw new BadRequestException('Invalid Email and/or Password')
        const token=jwt.sign({id:user._id,name:user.fname},'secret key is here')
        return token;
    }

}