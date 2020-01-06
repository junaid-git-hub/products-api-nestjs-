import { Injectable, NestInterceptor, ExecutionContext, CallHandler } from "@nestjs/common";
import { map } from "rxjs/Operators"

@Injectable()
export class DemoInterceptor implements NestInterceptor{
    intercept(context: ExecutionContext, next:CallHandler){
        console.log('something is done before execution of handler')
        return next.handle().pipe(
                                    map(
                                            (data)=>{
                                                return {result:data}
                                            }
                                        )
                            )           
    }
}