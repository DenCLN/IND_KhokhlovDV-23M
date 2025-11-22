import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreatePlanDto } from './dto/create-plan.dto';
import { UpdatePlanDto } from './dto/update-plan.dto';

@Injectable()
export class PlansService {
  constructor(private readonly prisma: PrismaService) {}

  async create(data: CreatePlanDto) {
    // Валидация существования тренера
    const trainer = await this.prisma.trainer.findUnique({
      where: { id: data.creatorId },
    });
    if (!trainer) {
      throw new NotFoundException(`Trainer with id ${data.creatorId} not found`);
    }

    // Валидация существования клиента (если указан)
    if (data.clientId) {
      const client = await this.prisma.client.findUnique({
        where: { id: data.clientId },
      });
      if (!client) {
        throw new NotFoundException(`Client with id ${data.clientId} not found`);
      }
    }

    // Валидация существования упражнений из библиотеки (если указаны)
    if (data.exercises) {
      for (const exercise of data.exercises) {
        if (exercise.exerciseLibraryId) {
          const exerciseFromLibrary = await this.prisma.exerciseLibrary.findUnique({
            where: { id: exercise.exerciseLibraryId },
          });
          if (!exerciseFromLibrary) {
            throw new NotFoundException(
              `Exercise from library with id ${exercise.exerciseLibraryId} not found`,
            );
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

  findById(id: string) {
    return this.prisma.trainingPlan.findUnique({ where: { id } });
  }

  findMany(params: { difficulty?: string; clientId?: string }) {
    const { difficulty, clientId } = params;
    return this.prisma.trainingPlan.findMany({
      where: {
        ...(difficulty ? { difficulty: difficulty as any } : {}),
        ...(clientId ? { clientId } : {}),
      },
      orderBy: { createdAt: 'desc' },
    });
  }

  async update(id: string, data: UpdatePlanDto) {
    // Проверяем существование плана
    const plan = await this.prisma.trainingPlan.findUnique({ where: { id } });
    if (!plan) {
      throw new NotFoundException('Training plan not found');
    }

    // Валидация существования тренера (если обновляется)
    if (data.creatorId) {
      const trainer = await this.prisma.trainer.findUnique({
        where: { id: data.creatorId },
      });
      if (!trainer) {
        throw new NotFoundException(`Trainer with id ${data.creatorId} not found`);
      }
    }

    // Валидация существования клиента (если обновляется)
    if (data.clientId !== undefined) {
      if (data.clientId) {
        const client = await this.prisma.client.findUnique({
          where: { id: data.clientId },
        });
        if (!client) {
          throw new NotFoundException(`Client with id ${data.clientId} not found`);
        }
      }
    }

    // Валидация существования упражнений из библиотеки (если обновляются)
    if (data.exercises) {
      for (const exercise of data.exercises) {
        if (exercise.exerciseLibraryId) {
          const exerciseFromLibrary = await this.prisma.exerciseLibrary.findUnique({
            where: { id: exercise.exerciseLibraryId },
          });
          if (!exerciseFromLibrary) {
            throw new NotFoundException(
              `Exercise from library with id ${exercise.exerciseLibraryId} not found`,
            );
          }
        }
      }
    }

    try {
      return await this.prisma.trainingPlan.update({ where: { id }, data });
    } catch {
      throw new NotFoundException('Training plan not found');
    }
  }

  async remove(id: string) {
    try {
      await this.prisma.trainingPlan.delete({ where: { id } });
      return { success: true };
    } catch {
      throw new NotFoundException('Training plan not found');
    }
  }

  async addExercises(id: string, exercises: any[]) {
    const plan = await this.prisma.trainingPlan.findUnique({ where: { id } });
    if (!plan) throw new NotFoundException('Training plan not found');

    // Валидация существования упражнений из библиотеки (если указаны)
    for (const exercise of exercises) {
      if (exercise.exerciseLibraryId) {
        const exerciseFromLibrary = await this.prisma.exerciseLibrary.findUnique({
          where: { id: exercise.exerciseLibraryId },
        });
        if (!exerciseFromLibrary) {
          throw new NotFoundException(
            `Exercise from library with id ${exercise.exerciseLibraryId} not found`,
          );
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

  async clone(id: string) {
    const plan = await this.prisma.trainingPlan.findUnique({ where: { id } });
    if (!plan) throw new NotFoundException('Training plan not found');
    const { id: _omit, createdAt, updatedAt, title, ...rest } = plan as any;
    return this.prisma.trainingPlan.create({
      data: {
        title: `${title} (Copy)`,
        ...rest,
        createdAt: undefined,
        updatedAt: undefined,
      },
    });
  }
}
