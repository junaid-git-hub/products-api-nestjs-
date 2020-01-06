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
exports.RegisterUserSchema = new mongoose.Schema({
    fname: { type: String, required: true },
    lname: { type: String, required: true },
    email: { type: String, required: true },
    password: { type: String, required: true },
    registerdAt: { type: Date, default: new Date() }
});
class RegisterData {
}
__decorate([
    class_validator_1.IsDefined(), class_validator_1.IsNotEmpty(), class_validator_1.IsString(), class_validator_1.Length(1, 50), class_validator_1.Matches(/^[a-z]+$/i),
    __metadata("design:type", String)
], RegisterData.prototype, "fname", void 0);
__decorate([
    class_validator_1.IsDefined(), class_validator_1.IsNotEmpty(), class_validator_1.IsString(), class_validator_1.Length(1, 50), class_validator_1.Matches(/^[a-z]+$/i),
    __metadata("design:type", String)
], RegisterData.prototype, "lname", void 0);
__decorate([
    class_validator_1.IsDefined(), class_validator_1.IsNotEmpty(), class_validator_1.IsEmail(),
    __metadata("design:type", String)
], RegisterData.prototype, "email", void 0);
__decorate([
    class_validator_1.IsDefined(), class_validator_1.IsNotEmpty(), class_validator_1.IsString(), class_validator_1.Length(6, 255),
    __metadata("design:type", String)
], RegisterData.prototype, "password", void 0);
exports.RegisterData = RegisterData;
class LoginData {
}
__decorate([
    class_validator_1.IsDefined(), class_validator_1.IsNotEmpty(), class_validator_1.IsEmail(),
    __metadata("design:type", String)
], LoginData.prototype, "email", void 0);
__decorate([
    class_validator_1.IsDefined(), class_validator_1.IsNotEmpty(), class_validator_1.IsString(), class_validator_1.Length(6, 255),
    __metadata("design:type", String)
], LoginData.prototype, "password", void 0);
exports.LoginData = LoginData;
//# sourceMappingURL=user-authentication.model.js.map