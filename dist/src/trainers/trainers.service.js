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
exports.TrainersService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../prisma/prisma.service");
let TrainersService = class TrainersService {
    prisma;
    constructor(prisma) {
        this.prisma = prisma;
    }
    create(data) {
        return this.prisma.trainer.create({ data });
    }
    findAll(specialization) {
        return this.prisma.trainer.findMany({
            where: specialization
                ? { specialization: { contains: specialization, mode: 'insensitive' } }
                : undefined,
            orderBy: { createdAt: 'desc' },
        });
    }
    async findOne(id) {
        const trainer = await this.prisma.trainer.findUnique({ where: { id } });
        if (!trainer)
            throw new common_1.NotFoundException('Trainer not found');
        return trainer;
    }
    async update(id, data) {
        try {
            return await this.prisma.trainer.update({ where: { id }, data });
        }
        catch {
            throw new common_1.NotFoundException('Trainer not found');
        }
    }
    async remove(id) {
        try {
            await this.prisma.trainer.delete({ where: { id } });
            return { success: true };
        }
        catch {
            throw new common_1.NotFoundException('Trainer not found');
        }
    }
};
exports.TrainersService = TrainersService;
exports.TrainersService = TrainersService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], TrainersService);
//# sourceMappingURL=trainers.service.js.map