"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
const user_authentication_controller_1 = require("./user-authentication.controller");
const user_authentication_service_1 = require("./user-authentication.service");
const mongoose_1 = require("@nestjs/mongoose");
const user_authentication_model_1 = require("./user-authentication.model");
const common_1 = require("@nestjs/common");
let UserAuthenticationModule = class UserAuthenticationModule {
};
UserAuthenticationModule = __decorate([
    common_1.Module({
        controllers: [user_authentication_controller_1.UserAuthenticationController],
        imports: [mongoose_1.MongooseModule.forFeature([{ name: 'Register_User', schema: user_authentication_model_1.RegisterUserSchema }])],
        providers: [user_authentication_service_1.UserAuthenticationService]
    })
], UserAuthenticationModule);
exports.UserAuthenticationModule = UserAuthenticationModule;
//# sourceMappingURL=user-authentication.module.js.map