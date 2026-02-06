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
const faculty_service_1 = require("./faculty.service");
const faculty_dto_1 = require("./dto/faculty.dto");
let FacultyController = class FacultyController {
    facultyService;
    constructor(facultyService) {
        this.facultyService = facultyService;
    }
    findAll() {
        return this.facultyService.findAll();
    }
    findOne(id) {
        return this.facultyService.findOne(id);
    }
    create(createFacultyDto) {
        return this.facultyService.create(createFacultyDto);
    }
    update(id, updateFacultyDto) {
        return this.facultyService.update(id, updateFacultyDto);
    }
    delete(id) {
        return this.facultyService.delete(id);
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
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Object)
], FacultyController.prototype, "findOne", null);
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [faculty_dto_1.CreateFacultyDto]),
    __metadata("design:returntype", Object)
], FacultyController.prototype, "create", null);
__decorate([
    (0, common_1.Put)(':id'),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, faculty_dto_1.UpdateFacultyDto]),
    __metadata("design:returntype", Object)
], FacultyController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Object)
], FacultyController.prototype, "delete", null);
exports.FacultyController = FacultyController = __decorate([
    (0, common_1.Controller)('faculty'),
    __metadata("design:paramtypes", [faculty_service_1.FacultyService])
], FacultyController);
//# sourceMappingURL=faculty.controller.js.map