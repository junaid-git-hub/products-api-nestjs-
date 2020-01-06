"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
const common_1 = require("@nestjs/common");
const user_authentication_service_1 = require("./user-authentication.service");
const user_authentication_model_1 = require("./user-authentication.model");
let UserAuthenticationController = class UserAuthenticationController {
    constructor(userAuthService) {
        this.userAuthService = userAuthService;
    }
    register(details) {
        return this.userAuthService.register(details);
    }
    login(details) {
        return this.userAuthService.login(details);
    }
};
__decorate([
    common_1.Post('register'),
    __param(0, common_1.Body(new common_1.ValidationPipe())),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [user_authentication_model_1.RegisterData]),
    __metadata("design:returntype", void 0)
], UserAuthenticationController.prototype, "register", null);
__decorate([
    common_1.Post('login'),
    __param(0, common_1.Body(new common_1.ValidationPipe())),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [user_authentication_model_1.LoginData]),
    __metadata("design:returntype", void 0)
], UserAuthenticationController.prototype, "login", null);
UserAuthenticationController = __decorate([
    common_1.Controller('Auth'),
    __metadata("design:paramtypes", [user_authentication_service_1.UserAuthenticationService])
], UserAuthenticationController);
exports.UserAuthenticationController = UserAuthenticationController;
//# sourceMappingURL=user-authentication.controller.js.map