import { Injectable, CanActivate, ExecutionContext } from "@nestjs/common";
import { Observable } from 'rxjs'
import { Reflector } from '@nestjs/core'

@Injectable()
export class AuthGuard implements CanActivate{
    constructor(private reflector:Reflector){}
    canActivate(context: ExecutionContext): boolean|Promise<boolean>|Observable<boolean>{
        const definedRoles=this.reflector.get<string[]>('roles',context.getHandler());
        console.log(definedRoles);
        const hasRole=definedRoles.includes('admin')
        if(hasRole) return true;
        return false;
    }
}