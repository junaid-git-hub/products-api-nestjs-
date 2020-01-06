import { Module, MiddlewareConsumer } from '@nestjs/common';
import { AppController } from './app.controller';
import { ProductModule } from './product/product.module';
import { MongooseModule } from '@nestjs/mongoose';
import { AppService } from './app.service';
import { UserAuthenticationModule } from './authentication/user-authentication.module'
//import {APP_GUARD} from '@nestjs/core'
//import { AuthGuard } from './product/guards/demo-guard.guard';
import {CrossOriginPolicy} from './product/middleware/cross-origin.middleware'
import {} from '@nestjs/common'


@Module({
  imports: [ProductModule,MongooseModule.forRoot('mongodb+srv://junaid:9086956169@cluster0-n6cvo.mongodb.net/test?retryWrites=true&w=majority'),UserAuthenticationModule],
  controllers: [AppController],
  providers: [AppService
    //,{provide:APP_GUARD,useClass:AuthGuard}//
  ],
})
export class AppModule {
  configure(consumer: MiddlewareConsumer){
    consumer.apply(CrossOriginPolicy).forRoutes('/')
  }
}
