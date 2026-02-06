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
exports.DemosController = void 0;
const common_1 = require("@nestjs/common");
let DemosController = class DemosController {
    handleAllMethods() {
        return 'This route handles ALL HTTP methods (GET, POST, PUT, DELETE, PATCH, etc.)';
    }
    customHttpCode() {
        return 'This response has HTTP status code 202 (Accepted)';
    }
    createdStatus() {
        return 'This response has HTTP status code 201 (Created)';
    }
    redirectToGoogle() {
    }
    redirectToHome() {
    }
    dynamicRedirect() {
        return { url: 'https://docs.nestjs.com', statusCode: 301 };
    }
    customHeaders() {
        return 'This response includes custom headers: X-Custom-Header and Cache-Control';
    }
    jsonWithHeaders() {
        return {
            message: 'Response with custom headers',
            apiVersion: '1.0',
        };
    }
    getFile(folder, filename) {
        return {
            message: 'File route matched!',
            folder: folder,
            filename: filename,
            fullPath: `${folder}/${filename}`,
            description: 'Matches: /files/docs/readme, /files/images/logo',
        };
    }
    browseItems(category, subcategory, item) {
        return {
            message: 'Browse route matched!',
            category: category,
            subcategory: subcategory,
            item: item,
            description: 'Matches: /browse/electronics/phones/iphone',
        };
    }
    getUserById(id) {
        return {
            message: `Getting user with ID: ${id}`,
            userId: id,
        };
    }
    getPrimeNumbers(start, end) {
        const startNum = parseInt(start, 10);
        const endNum = parseInt(end, 10);
        if (isNaN(startNum) || isNaN(endNum)) {
            return { error: 'Start and end must be valid numbers' };
        }
        if (startNum > endNum) {
            return { error: 'Start must be less than or equal to end' };
        }
        const primes = this.findPrimes(startNum, endNum);
        return {
            range: { start: startNum, end: endNum },
            count: primes.length,
            primeNumbers: primes,
        };
    }
    isPrime(num) {
        if (num < 2)
            return false;
        if (num === 2)
            return true;
        if (num % 2 === 0)
            return false;
        for (let i = 3; i <= Math.sqrt(num); i += 2) {
            if (num % i === 0)
                return false;
        }
        return true;
    }
    findPrimes(start, end) {
        const primes = [];
        for (let i = start; i <= end; i++) {
            if (this.isPrime(i)) {
                primes.push(i);
            }
        }
        return primes;
    }
    getPagination(pageNo) {
        const page = parseInt(pageNo, 10);
        const recordsPerPage = 5;
        if (isNaN(page) || page < 1) {
            return { error: 'Page number must be a positive integer' };
        }
        const startRecord = (page - 1) * recordsPerPage + 1;
        const endRecord = page * recordsPerPage;
        return {
            pageNumber: page,
            recordsPerPage: recordsPerPage,
            startRecord: startRecord,
            endRecord: endRecord,
            message: `Page ${page} contains records from ${startRecord} to ${endRecord}`,
        };
    }
    getAllParams(params) {
        return {
            message: 'All route parameters captured',
            parameters: params,
        };
    }
};
exports.DemosController = DemosController;
__decorate([
    (0, common_1.All)('all-methods'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", String)
], DemosController.prototype, "handleAllMethods", null);
__decorate([
    (0, common_1.Get)('custom-status'),
    (0, common_1.HttpCode)(202),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", String)
], DemosController.prototype, "customHttpCode", null);
__decorate([
    (0, common_1.Get)('created'),
    (0, common_1.HttpCode)(201),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", String)
], DemosController.prototype, "createdStatus", null);
__decorate([
    (0, common_1.Get)('redirect-google'),
    (0, common_1.Redirect)('https://www.google.com', 302),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], DemosController.prototype, "redirectToGoogle", null);
__decorate([
    (0, common_1.Get)('redirect-home'),
    (0, common_1.Redirect)('/', 301),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], DemosController.prototype, "redirectToHome", null);
__decorate([
    (0, common_1.Get)('redirect-dynamic'),
    (0, common_1.Redirect)('https://nestjs.com', 302),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Object)
], DemosController.prototype, "dynamicRedirect", null);
__decorate([
    (0, common_1.Get)('custom-header'),
    (0, common_1.Header)('X-Custom-Header', 'MyCustomValue'),
    (0, common_1.Header)('Cache-Control', 'no-cache'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", String)
], DemosController.prototype, "customHeaders", null);
__decorate([
    (0, common_1.Get)('json-header'),
    (0, common_1.Header)('Content-Type', 'application/json'),
    (0, common_1.Header)('X-API-Version', '1.0'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Object)
], DemosController.prototype, "jsonWithHeaders", null);
__decorate([
    (0, common_1.Get)('files/:folder/:filename'),
    __param(0, (0, common_1.Param)('folder')),
    __param(1, (0, common_1.Param)('filename')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String]),
    __metadata("design:returntype", Object)
], DemosController.prototype, "getFile", null);
__decorate([
    (0, common_1.Get)('browse/:category/:subcategory/:item'),
    __param(0, (0, common_1.Param)('category')),
    __param(1, (0, common_1.Param)('subcategory')),
    __param(2, (0, common_1.Param)('item')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String, String]),
    __metadata("design:returntype", Object)
], DemosController.prototype, "browseItems", null);
__decorate([
    (0, common_1.Get)('user/:id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Object)
], DemosController.prototype, "getUserById", null);
__decorate([
    (0, common_1.Get)('primes/:start/:end'),
    __param(0, (0, common_1.Param)('start')),
    __param(1, (0, common_1.Param)('end')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String]),
    __metadata("design:returntype", Object)
], DemosController.prototype, "getPrimeNumbers", null);
__decorate([
    (0, common_1.Get)('pagination/:pageNo'),
    __param(0, (0, common_1.Param)('pageNo')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Object)
], DemosController.prototype, "getPagination", null);
__decorate([
    (0, common_1.Get)('all-params/:param1/:param2/:param3'),
    __param(0, (0, common_1.Param)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Object)
], DemosController.prototype, "getAllParams", null);
exports.DemosController = DemosController = __decorate([
    (0, common_1.Controller)('demos')
], DemosController);
//# sourceMappingURL=demos.controller.js.map