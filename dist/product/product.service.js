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
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
const common_1 = require("@nestjs/common");
const mongoose_1 = require("mongoose");
const mongoose_2 = require("@nestjs/mongoose");
let ProductService = class ProductService {
    constructor(ProductModel) {
        this.ProductModel = ProductModel;
    }
    async addProduct(details) {
        const newProduct = new this.ProductModel(details);
        const result = await newProduct.save();
        return result._id;
    }
    async getProducts() {
        return await this.ProductModel.find().select({ _id: true, title: true, type: true, price: true, imgUrl: true });
    }
    async getProduct(id) {
        const result = await this.ProductModel.findById(id.id);
        if (!result)
            throw new common_1.NotFoundException('No Record Found');
        return result;
    }
    async updateProduct(id, details) {
        let result = await this.ProductModel.findById(id.id);
        if (!result)
            throw new common_1.NotFoundException('No Record Found');
        if (details.title)
            result.title = details.title;
        if (details.type)
            result.type = details.type;
        if (details.price)
            result.price = details.price;
        if (details.imgUrl)
            result.imgUrl = details.imgUrl;
        result = await result.save();
        return result;
    }
    async deleteProduct(id) {
        const result = await this.ProductModel.deleteOne({ _id: id.id });
        if (result.n == 0)
            throw new common_1.NotFoundException('No Record Found');
        return { mesage: 'Deleted Successfully' };
    }
};
ProductService = __decorate([
    common_1.Injectable(),
    __param(0, mongoose_2.InjectModel('Product')),
    __metadata("design:paramtypes", [typeof (_a = typeof mongoose_1.Model !== "undefined" && mongoose_1.Model) === "function" ? _a : Object])
], ProductService);
exports.ProductService = ProductService;
//# sourceMappingURL=product.service.js.map