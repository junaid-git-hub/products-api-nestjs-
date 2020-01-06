import { AppService } from './app.service';
export declare class AppController {
    private readonly appService;
    constructor(appService: AppService);
    getHello(): string;
    demonstaratePipe(id1: any, id2: any): any;
}
