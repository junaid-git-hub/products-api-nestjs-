import { RegisterData, LoginData } from './user-authentication.model';
import { Model } from 'mongoose';
export declare class UserAuthenticationService {
    private registerUser;
    constructor(registerUser: Model<RegisterData>);
    register(details: RegisterData): Promise<{
        id: any;
    }>;
    login(details: LoginData): Promise<any>;
}
