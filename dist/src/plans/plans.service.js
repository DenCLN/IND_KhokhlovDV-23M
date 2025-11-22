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
exports.PlansService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../prisma/prisma.service");
let PlansService = class PlansService {
    prisma;
    constructor(prisma) {
        this.prisma = prisma;
    }
    async create(data) {
        const trainer = await this.prisma.trainer.findUnique({
            where: { id: data.creatorId },
        });
        if (!trainer) {
            throw new common_1.NotFoundException(`Trainer with id ${data.creatorId} not found`);
        }
        if (data.clientId) {
            const client = await this.prisma.client.findUnique({
                where: { id: data.clientId },
            });
            if (!client) {
                throw new common_1.NotFoundException(`Client with id ${data.clientId} not found`);
            }
        }
        if (data.exercises) {
            for (const exercise of data.exercises) {
                if (exercise.exerciseLibraryId) {
                    const exerciseFromLibrary = await this.prisma.exerciseLibrary.findUnique({
                        where: { id: exercise.exerciseLibraryId },
                    });
                    if (!exerciseFromLibrary) {
                        throw new common_1.NotFoundException(`Exercise from library with id ${exercise.exerciseLibraryId} not found`);
                    }
                }
            }
        }
        return this.prisma.trainingPlan.create({
            data: {
                title: data.title,
                description: data.description,
                goal: data.goal,
                difficulty: data.difficulty,
                creatorId: data.creatorId,
                clientId: data.clientId ?? null,
                exercises: data.exercises ?? [],
            },
        });
    }
    findById(id) {
        return this.prisma.trainingPlan.findUnique({ where: { id } });
    }
    findMany(params) {
        const { difficulty, clientId } = params;
        return this.prisma.trainingPlan.findMany({
            where: {
                ...(difficulty ? { difficulty: difficulty } : {}),
                ...(clientId ? { clientId } : {}),
            },
            orderBy: { createdAt: 'desc' },
        });
    }
    async update(id, data) {
        const plan = await this.prisma.trainingPlan.findUnique({ where: { id } });
        if (!plan) {
            throw new common_1.NotFoundException('Training plan not found');
        }
        if (data.creatorId) {
            const trainer = await this.prisma.trainer.findUnique({
                where: { id: data.creatorId },
            });
            if (!trainer) {
                throw new common_1.NotFoundException(`Trainer with id ${data.creatorId} not found`);
            }
        }
        if (data.clientId !== undefined) {
            if (data.clientId) {
                const client = await this.prisma.client.findUnique({
                    where: { id: data.clientId },
                });
                if (!client) {
                    throw new common_1.NotFoundException(`Client with id ${data.clientId} not found`);
                }
            }
        }
        if (data.exercises) {
            for (const exercise of data.exercises) {
                if (exercise.exerciseLibraryId) {
                    const exerciseFromLibrary = await this.prisma.exerciseLibrary.findUnique({
                        where: { id: exercise.exerciseLibraryId },
                    });
                    if (!exerciseFromLibrary) {
                        throw new common_1.NotFoundException(`Exercise from library with id ${exercise.exerciseLibraryId} not found`);
                    }
                }
            }
        }
        try {
            return await this.prisma.trainingPlan.update({ where: { id }, data });
        }
        catch {
            throw new common_1.NotFoundException('Training plan not found');
        }
    }
    async remove(id) {
        try {
            await this.prisma.trainingPlan.delete({ where: { id } });
            return { success: true };
        }
        catch {
            throw new common_1.NotFoundException('Training plan not found');
        }
    }
    async addExercises(id, exercises) {
        const plan = await this.prisma.trainingPlan.findUnique({ where: { id } });
        if (!plan)
            throw new common_1.NotFoundException('Training plan not found');
        for (const exercise of exercises) {
            if (exercise.exerciseLibraryId) {
                const exerciseFromLibrary = await this.prisma.exerciseLibrary.findUnique({
                    where: { id: exercise.exerciseLibraryId },
                });
                if (!exerciseFromLibrary) {
                    throw new common_1.NotFoundException(`Exercise from library with id ${exercise.exerciseLibraryId} not found`);
                }
            }
        }
        const updated = await this.prisma.trainingPlan.update({
            where: { id },
            data: {
                exercises: [...(plan.exercises ?? []), ...exercises],
            },
        });
        return updated;
    }
    async clone(id) {
        const plan = await this.prisma.trainingPlan.findUnique({ where: { id } });
        if (!plan)
            throw new common_1.NotFoundException('Training plan not found');
        const { id: _omit, createdAt, updatedAt, title, ...rest } = plan;
        return this.prisma.trainingPlan.create({
            data: {
                title: `${title} (Copy)`,
                ...rest,
                createdAt: undefined,
                updatedAt: undefined,
            },
        });
    }
};
exports.PlansService = PlansService;
exports.PlansService = PlansService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], PlansService);
//# sourceMappingURL=plans.service.js.map