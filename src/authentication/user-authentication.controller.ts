import { Controller, Post, Body, ValidationPipe } from "@nestjs/common";
import { UserAuthenticationService } from "./user-authentication.service";
import { RegisterData, LoginData } from "./user-authentication.model";

@Controller('Auth')
export class UserAuthenticationController{
    constructor(private userAuthService:UserAuthenticationService){}
    @Post('register')
    register(@Body(new ValidationPipe()) details: RegisterData){
      return this.userAuthService.register(details); 
    }
    @Post('login')
    login(@Body(new ValidationPipe()) details: LoginData){
      return this.userAuthService.login(details)
    }
    
}