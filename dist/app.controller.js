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
const app_service_1 = require("./app.service");
const demo_uppercase_pipe_1 = require("./product/pipes/demo-uppercase.pipe");
const demo_guard_guard_1 = require("./product/guards/demo-guard.guard");
const demo_decorators_1 = require("./product/decorators/demo.decorators");
const demo_interceptor_1 = require("./product/interceptors/demo.interceptor");
let AppController = class AppController {
    constructor(appService) {
        this.appService = appService;
    }
    getHello() {
        return this.appService.getHello();
    }
    demonstaratePipe(id1, id2) {
        return { param1: id1, param2: id2 };
    }
};
__decorate([
    common_1.Get(),
    demo_decorators_1.Roles('admin'),
    common_1.UseGuards(demo_guard_guard_1.AuthGuard),
    common_1.UseInterceptors(demo_interceptor_1.DemoInterceptor),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", String)
], AppController.prototype, "getHello", null);
__decorate([
    common_1.Get(':id1/:id2'),
    demo_decorators_1.Roles('admin'),
    common_1.UseGuards(demo_guard_guard_1.AuthGuard),
    common_1.UsePipes(new demo_uppercase_pipe_1.UpperCasePipe()),
    __param(0, common_1.Param('id1')), __param(1, common_1.Param('id2')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Object)
], AppController.prototype, "demonstaratePipe", null);
AppController = __decorate([
    common_1.Controller(),
    __metadata("design:paramtypes", [app_service_1.AppService])
], AppController);
exports.AppController = AppController;
//# sourceMappingURL=app.controller.js.map