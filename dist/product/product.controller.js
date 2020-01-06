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
const product_model_1 = require("./product.model");
const product_service_1 = require("./product.service");
const product_validation_pipe_1 = require("./pipes/product-validation.pipe");
const product_route_guards_1 = require("./guards/product-route.guards");
let ProductController = class ProductController {
    constructor(productService) {
        this.productService = productService;
    }
    addProduct(receivedData) {
        const details = {
            title: receivedData.title,
            type: receivedData.type,
            price: receivedData.price,
            imgUrl: receivedData.imgUrl
        };
        return this.productService.addProduct(details);
    }
    getProducts() {
        return this.productService.getProducts();
    }
    getProduct(id) {
        return this.productService.getProduct(id);
    }
    updateProduct(id, receivedData) {
        const details = {
            title: receivedData.title,
            type: receivedData.type,
            price: receivedData.price,
            imgUrl: receivedData.imgUrl
        };
        return this.productService.updateProduct(id, details);
    }
    deleteProduct(id) {
        return this.productService.deleteProduct(id);
    }
};
__decorate([
    common_1.Post(),
    __param(0, common_1.Body(new product_validation_pipe_1.ValidationPipe())),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [product_model_1.Product]),
    __metadata("design:returntype", Promise)
], ProductController.prototype, "addProduct", null);
__decorate([
    common_1.Get(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], ProductController.prototype, "getProducts", null);
__decorate([
    common_1.Get(':id'),
    __param(0, common_1.Param(new product_validation_pipe_1.ValidationPipe())),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [product_model_1.Id]),
    __metadata("design:returntype", Promise)
], ProductController.prototype, "getProduct", null);
__decorate([
    common_1.Put(':id'),
    __param(0, common_1.Param(new product_validation_pipe_1.ValidationPipe())), __param(1, common_1.Body(new product_validation_pipe_1.ValidationPipe())),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [product_model_1.Id, product_model_1.UpdateProduct]),
    __metadata("design:returntype", Promise)
], ProductController.prototype, "updateProduct", null);
__decorate([
    common_1.Delete(':id'),
    __param(0, common_1.Param(new product_validation_pipe_1.ValidationPipe())),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [product_model_1.Id]),
    __metadata("design:returntype", Promise)
], ProductController.prototype, "deleteProduct", null);
ProductController = __decorate([
    common_1.UseGuards(product_route_guards_1.ProductAuthGuard),
    common_1.Controller('product'),
    __metadata("design:paramtypes", [product_service_1.ProductService])
], ProductController);
exports.ProductController = ProductController;
//# sourceMappingURL=product.controller.js.map