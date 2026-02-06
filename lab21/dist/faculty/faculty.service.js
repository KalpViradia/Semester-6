"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.FacultyService = void 0;
const common_1 = require("@nestjs/common");
let FacultyService = class FacultyService {
    faculties = [
        { id: 1, name: 'Dr. Smith', email: 'smith@university.com', department: 'Computer Science', designation: 'Professor' },
        { id: 2, name: 'Dr. Johnson', email: 'johnson@university.com', department: 'Electronics', designation: 'Associate Professor' },
        { id: 3, name: 'Dr. Williams', email: 'williams@university.com', department: 'Mathematics', designation: 'Assistant Professor' },
    ];
    idCounter = 4;
    findAll() {
        return this.faculties;
    }
    findOne(id) {
        const faculty = this.faculties.find((f) => f.id === id);
        if (!faculty) {
            throw new common_1.NotFoundException(`Faculty with ID ${id} not found`);
        }
        return faculty;
    }
    create(createFacultyDto) {
        const newFaculty = {
            id: this.idCounter++,
            ...createFacultyDto,
        };
        this.faculties.push(newFaculty);
        return newFaculty;
    }
    update(id, updateFacultyDto) {
        const facultyIndex = this.faculties.findIndex((f) => f.id === id);
        if (facultyIndex === -1) {
            throw new common_1.NotFoundException(`Faculty with ID ${id} not found`);
        }
        this.faculties[facultyIndex] = {
            ...this.faculties[facultyIndex],
            ...updateFacultyDto,
        };
        return this.faculties[facultyIndex];
    }
    delete(id) {
        const facultyIndex = this.faculties.findIndex((f) => f.id === id);
        if (facultyIndex === -1) {
            throw new common_1.NotFoundException(`Faculty with ID ${id} not found`);
        }
        this.faculties.splice(facultyIndex, 1);
        return { message: `Faculty with ID ${id} deleted successfully` };
    }
};
exports.FacultyService = FacultyService;
exports.FacultyService = FacultyService = __decorate([
    (0, common_1.Injectable)()
], FacultyService);
//# sourceMappingURL=faculty.service.js.map