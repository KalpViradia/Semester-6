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
exports.StudentController = void 0;
const common_1 = require("@nestjs/common");
let StudentController = class StudentController {
    students = [
        {
            id: 1,
            name: 'John Doe',
            email: 'john@example.com',
            course: 'Computer Science',
        },
        {
            id: 2,
            name: 'Jane Smith',
            email: 'jane@example.com',
            course: 'Mathematics',
        },
        { id: 3, name: 'Bob Johnson', email: 'bob@example.com', course: 'Physics' },
    ];
    helloWorld() {
        return 'hello world';
    }
    findAll() {
        return this.students;
    }
    findOne(id) {
        const student = this.students.find((s) => s.id === parseInt(id));
        if (!student) {
            return { message: `Student with id ${id} not found` };
        }
        return student;
    }
    insert(student) {
        const newId = Math.max(...this.students.map((s) => s.id), 0) + 1;
        const newStudent = { id: newId, ...student };
        this.students.push(newStudent);
        return newStudent;
    }
    update(id, updateData) {
        const index = this.students.findIndex((s) => s.id === parseInt(id));
        if (index === -1) {
            return { message: `Student with id ${id} not found` };
        }
        this.students[index] = { ...this.students[index], ...updateData };
        return this.students[index];
    }
    delete(id) {
        const index = this.students.findIndex((s) => s.id === parseInt(id));
        if (index === -1) {
            return { message: `Student with id ${id} not found` };
        }
        this.students.splice(index, 1);
        return { message: `Student with id ${id} deleted successfully` };
    }
};
exports.StudentController = StudentController;
__decorate([
    (0, common_1.Get)('hello'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", String)
], StudentController.prototype, "helloWorld", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Array)
], StudentController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Object)
], StudentController.prototype, "findOne", null);
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Object)
], StudentController.prototype, "insert", null);
__decorate([
    (0, common_1.Put)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", Object)
], StudentController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Object)
], StudentController.prototype, "delete", null);
exports.StudentController = StudentController = __decorate([
    (0, common_1.Controller)('student')
], StudentController);
//# sourceMappingURL=student.controller.js.map