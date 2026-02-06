"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.StudentService = void 0;
const common_1 = require("@nestjs/common");
let StudentService = class StudentService {
    students = [
        { id: 1, name: 'John Doe', email: 'john@example.com', age: 20, course: 'Computer Science' },
        { id: 2, name: 'Jane Smith', email: 'jane@example.com', age: 21, course: 'Information Technology' },
        { id: 3, name: 'Bob Johnson', email: 'bob@example.com', age: 22, course: 'Electronics' },
    ];
    idCounter = 4;
    findAll() {
        return this.students;
    }
    findOne(id) {
        const student = this.students.find((s) => s.id === id);
        if (!student) {
            throw new common_1.NotFoundException(`Student with ID ${id} not found`);
        }
        return student;
    }
    create(createStudentDto) {
        const newStudent = {
            id: this.idCounter++,
            ...createStudentDto,
        };
        this.students.push(newStudent);
        return newStudent;
    }
    update(id, updateStudentDto) {
        const studentIndex = this.students.findIndex((s) => s.id === id);
        if (studentIndex === -1) {
            throw new common_1.NotFoundException(`Student with ID ${id} not found`);
        }
        this.students[studentIndex] = {
            ...this.students[studentIndex],
            ...updateStudentDto,
        };
        return this.students[studentIndex];
    }
    delete(id) {
        const studentIndex = this.students.findIndex((s) => s.id === id);
        if (studentIndex === -1) {
            throw new common_1.NotFoundException(`Student with ID ${id} not found`);
        }
        this.students.splice(studentIndex, 1);
        return { message: `Student with ID ${id} deleted successfully` };
    }
};
exports.StudentService = StudentService;
exports.StudentService = StudentService = __decorate([
    (0, common_1.Injectable)()
], StudentService);
//# sourceMappingURL=student.service.js.map