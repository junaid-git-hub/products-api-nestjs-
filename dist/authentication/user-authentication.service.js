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
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
let UserAuthenticationService = class UserAuthenticationService {
    constructor(registerUser) {
        this.registerUser = registerUser;
    }
    async register(details) {
        const alreayExists = await this.registerUser.findOne({ email: details.email });
        if (alreayExists)
            throw new common_1.BadRequestException('Email is already taken');
        details.password = await bcrypt.hash(details.password, 2);
        const newUser = new this.registerUser(details);
        const result = await newUser.save();
        return { id: result._id };
    }
    async login(details) {
        const user = await this.registerUser.findOne({ email: details.email });
        if (!user)
            throw new common_1.BadRequestException('Invalid Email and/or Password');
        const result = await bcrypt.compare(details.password, user.password);
        if (!result)
            throw new common_1.BadRequestException('Invalid Email and/or Password');
        const token = jwt.sign({ id: user._id, name: user.fname }, 'secret key is here');
        return token;
    }
};
UserAuthenticationService = __decorate([
    common_1.Injectable(),
    __param(0, mongoose_2.InjectModel('Register_User')),
    __metadata("design:paramtypes", [typeof (_a = typeof mongoose_1.Model !== "undefined" && mongoose_1.Model) === "function" ? _a : Object])
], UserAuthenticationService);
exports.UserAuthenticationService = UserAuthenticationService;
//# sourceMappingURL=user-authentication.service.js.map