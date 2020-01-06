import { UserAuthenticationController } from './user-authentication.controller'
import { UserAuthenticationService } from './user-authentication.service'
import { MongooseModule } from '@nestjs/mongoose'
import { RegisterUserSchema } from './user-authentication.model'
import { Module } from '@nestjs/common'
@Module({
    controllers:[UserAuthenticationController],
    imports:[MongooseModule.forFeature([{name:'Register_User',schema:RegisterUserSchema}])],
    providers:[UserAuthenticationService]
})
export class UserAuthenticationModule{

}