import { UserAuthenticationService } from "./user-authentication.service";
import { RegisterData, LoginData } from "./user-authentication.model";
export declare class UserAuthenticationController {
    private userAuthService;
    constructor(userAuthService: UserAuthenticationService);
    register(details: RegisterData): Promise<{
        id: any;
    }>;
    login(details: LoginData): Promise<any>;
}
