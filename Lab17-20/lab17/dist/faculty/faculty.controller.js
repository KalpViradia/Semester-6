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
exports.FacultyController = void 0;
const common_1 = require("@nestjs/common");
let FacultyController = class FacultyController {
    facultyMembers = [
        {
            id: 1,
            name: 'Dr. Alice Brown',
            email: 'alice@university.edu',
            department: 'Computer Science',
            designation: 'Professor',
        },
        {
            id: 2,
            name: 'Dr. Charlie Wilson',
            email: 'charlie@university.edu',
            department: 'Mathematics',
            designation: 'Associate Professor',
        },
        {
            id: 3,
            name: 'Dr. Diana Lee',
            email: 'diana@university.edu',
            department: 'Physics',
            designation: 'Assistant Professor',
        },
    ];
    findAll() {
        return this.facultyMembers;
    }
    findOne(id) {
        const faculty = this.facultyMembers.find((f) => f.id === parseInt(id));
        if (!faculty) {
            return { message: `Faculty member with id ${id} not found` };
        }
        return faculty;
    }
    insert(faculty) {
        const newId = Math.max(...this.facultyMembers.map((f) => f.id), 0) + 1;
        const newFaculty = { id: newId, ...faculty };
        this.facultyMembers.push(newFaculty);
        return newFaculty;
    }
    update(id, updateData) {
        const index = this.facultyMembers.findIndex((f) => f.id === parseInt(id));
        if (index === -1) {
            return { message: `Faculty member with id ${id} not found` };
        }
        this.facultyMembers[index] = {
            ...this.facultyMembers[index],
            ...updateData,
        };
        return this.facultyMembers[index];
    }
    delete(id) {
        const index = this.facultyMembers.findIndex((f) => f.id === parseInt(id));
        if (index === -1) {
            return { message: `Faculty member with id ${id} not found` };
        }
        this.facultyMembers.splice(index, 1);
        return { message: `Faculty member with id ${id} deleted successfully` };
    }
};
exports.FacultyController = FacultyController;
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Array)
], FacultyController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Object)
], FacultyController.prototype, "findOne", null);
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Object)
], FacultyController.prototype, "insert", null);
__decorate([
    (0, common_1.Put)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", Object)
], FacultyController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Object)
], FacultyController.prototype, "delete", null);
exports.FacultyController = FacultyController = __decorate([
    (0, common_1.Controller)('faculty')
], FacultyController);
//# sourceMappingURL=faculty.controller.js.map