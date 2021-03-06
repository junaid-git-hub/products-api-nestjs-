import { NestMiddleware } from "@nestjs/common";
import { Request, Response } from 'express';
export declare class CrossOriginPolicy implements NestMiddleware {
    use(req: Request, res: Response, next: Function): void;
}
