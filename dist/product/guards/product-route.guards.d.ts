import { CanActivate, ExecutionContext } from "@nestjs/common";
export declare class ProductAuthGuard implements CanActivate {
    canActivate(context: ExecutionContext): boolean | Promise<boolean>;
}
