import { Injectable, NestMiddleware } from "@nestjs/common";
import {Request, Response} from 'express'

@Injectable()
export class CrossOriginPolicy implements NestMiddleware{
    use(req:Request,res:Response,next:Function){
        res.header("Access-Control-Allow-Origin", "*"); // update to match the domain you will make the request from
        res.header("Access-Control-Allow-Headers", "*");
        next();
    }
}
// app.use(function(req, res, next) {
//     res.header("Access-Control-Allow-Origin", "YOUR-DOMAIN.TLD"); // update to match the domain you will make the request from
//     res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
//     next();
// });