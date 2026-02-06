"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UsersService = void 0;
const common_1 = require("@nestjs/common");
let UsersService = class UsersService {
    users = [
        { id: 1, username: 'admin', email: 'admin@example.com', password: 'admin123', role: 'admin' },
        { id: 2, username: 'john_doe', email: 'john@example.com', password: 'john123', role: 'user' },
        { id: 3, username: 'jane_doe', email: 'jane@example.com', password: 'jane123', role: 'user' },
    ];
    idCounter = 4;
    findAll() {
        return this.users;
    }
    findOne(id) {
        const user = this.users.find((u) => u.id === id);
        if (!user) {
            throw new common_1.NotFoundException(`User with ID ${id} not found`);
        }
        return user;
    }
    create(createUserDto) {
        const newUser = {
            id: this.idCounter++,
            ...createUserDto,
        };
        this.users.push(newUser);
        return newUser;
    }
    update(id, updateUserDto) {
        const userIndex = this.users.findIndex((u) => u.id === id);
        if (userIndex === -1) {
            throw new common_1.NotFoundException(`User with ID ${id} not found`);
        }
        this.users[userIndex] = {
            ...this.users[userIndex],
            ...updateUserDto,
        };
        return this.users[userIndex];
    }
    delete(id) {
        const userIndex = this.users.findIndex((u) => u.id === id);
        if (userIndex === -1) {
            throw new common_1.NotFoundException(`User with ID ${id} not found`);
        }
        this.users.splice(userIndex, 1);
        return { message: `User with ID ${id} deleted successfully` };
    }
};
exports.UsersService = UsersService;
exports.UsersService = UsersService = __decorate([
    (0, common_1.Injectable)()
], UsersService);
//# sourceMappingURL=users.service.js.map