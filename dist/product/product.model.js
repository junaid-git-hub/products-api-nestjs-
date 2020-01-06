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
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose = require("mongoose");
const class_validator_1 = require("class-validator");
exports.ProductSchema = new mongoose.Schema({
    title: { type: String, required: true },
    type: { type: String, required: true },
    price: { type: Number, required: true },
    imgUrl: { type: String, required: true }
});
class Product {
}
__decorate([
    class_validator_1.IsOptional(),
    class_validator_1.IsMongoId(),
    __metadata("design:type", String)
], Product.prototype, "_id", void 0);
__decorate([
    class_validator_1.IsDefined(), class_validator_1.IsNotEmpty(), class_validator_1.IsString(), class_validator_1.Length(1, 50), class_validator_1.Matches(/^[a-z 0-9 ' ']+$/i),
    __metadata("design:type", String)
], Product.prototype, "title", void 0);
__decorate([
    class_validator_1.IsDefined(), class_validator_1.IsNotEmpty(), class_validator_1.IsString(), class_validator_1.Length(1, 50), class_validator_1.Matches(/^[a-z 0-9 ' ']+$/i),
    __metadata("design:type", String)
], Product.prototype, "type", void 0);
__decorate([
    class_validator_1.IsDefined(), class_validator_1.IsNotEmpty(), class_validator_1.IsNumber(),
    __metadata("design:type", Number)
], Product.prototype, "price", void 0);
__decorate([
    class_validator_1.IsDefined(), class_validator_1.IsNotEmpty(), class_validator_1.IsUrl(),
    __metadata("design:type", String)
], Product.prototype, "imgUrl", void 0);
exports.Product = Product;
class UpdateProduct {
}
__decorate([
    class_validator_1.IsOptional(),
    class_validator_1.IsString(), class_validator_1.Length(1, 50), class_validator_1.Matches(/^[a-z 0-9 ' ']+$/i),
    __metadata("design:type", String)
], UpdateProduct.prototype, "title", void 0);
__decorate([
    class_validator_1.IsOptional(),
    class_validator_1.IsString(), class_validator_1.Length(1, 50), class_validator_1.Matches(/^[a-z 0-9 ' ']+$/i),
    __metadata("design:type", String)
], UpdateProduct.prototype, "type", void 0);
__decorate([
    class_validator_1.IsOptional(),
    class_validator_1.IsNumber(),
    __metadata("design:type", Number)
], UpdateProduct.prototype, "price", void 0);
__decorate([
    class_validator_1.IsOptional(),
    class_validator_1.IsUrl(),
    __metadata("design:type", String)
], UpdateProduct.prototype, "imgUrl", void 0);
exports.UpdateProduct = UpdateProduct;
class Id {
}
__decorate([
    class_validator_1.IsMongoId(),
    __metadata("design:type", String)
], Id.prototype, "id", void 0);
exports.Id = Id;
//# sourceMappingURL=product.model.js.map