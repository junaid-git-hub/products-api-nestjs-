import { Injectable, CanActivate, ExecutionContext } from "@nestjs/common";
import * as jwt from 'jsonwebtoken'
@Injectable()
export class ProductAuthGuard implements CanActivate{
  canActivate(context: ExecutionContext):boolean|Promise<boolean>{
        const request=context.switchToHttp().getRequest()
        if(request.headers['auth']){
            let verified;
            try{
                verified=jwt.verify(request.headers['auth'],'secret key is here')
                if(verified){
                    return true;
                }
                else{
                    return false;
                }
            }
            catch(Exception){
                return false;
            }          
        }
        return false;
    }
}