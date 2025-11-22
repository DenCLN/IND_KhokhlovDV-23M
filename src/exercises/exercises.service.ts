import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateExerciseDto } from './dto/create-exercise.dto';
import { UpdateExerciseDto } from './dto/update-exercise.dto';

@Injectable()
export class ExercisesService {
  constructor(private readonly prisma: PrismaService) {}

  create(data: CreateExerciseDto) {
    return this.prisma.exerciseLibrary.create({ data });
  }

  findAll(muscleGroup?: string) {
    return this.prisma.exerciseLibrary.findMany({
      where: muscleGroup
        ? { muscleGroup: { contains: muscleGroup, mode: 'insensitive' } }
        : undefined,
      orderBy: { createdAt: 'desc' },
    });
  }

  async findOne(id: string) {
    const item = await this.prisma.exerciseLibrary.findUnique({
      where: { id },
    });
    if (!item) throw new NotFoundException('Exercise not found');
    return item;
  }

  async update(id: string, data: UpdateExerciseDto) {
    try {
      return await this.prisma.exerciseLibrary.update({ where: { id }, data });
    } catch {
      throw new NotFoundException('Exercise not found');
    }
  }

  async remove(id: string) {
    try {
      await this.prisma.exerciseLibrary.delete({ where: { id } });
      return { success: true };
    } catch {
      throw new NotFoundException('Exercise not found');
    }
  }
}



