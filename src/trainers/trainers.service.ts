import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateTrainerDto } from './dto/create-trainer.dto';
import { UpdateTrainerDto } from './dto/update-trainer.dto';

@Injectable()
export class TrainersService {
  constructor(private readonly prisma: PrismaService) {}

  create(data: CreateTrainerDto) {
    return this.prisma.trainer.create({ data });
  }

  findAll(specialization?: string) {
    return this.prisma.trainer.findMany({
      where: specialization
        ? { specialization: { contains: specialization, mode: 'insensitive' } }
        : undefined,
      orderBy: { createdAt: 'desc' },
    });
  }

  async findOne(id: string) {
    const trainer = await this.prisma.trainer.findUnique({ where: { id } });
    if (!trainer) throw new NotFoundException('Trainer not found');
    return trainer;
  }

  async update(id: string, data: UpdateTrainerDto) {
    try {
      return await this.prisma.trainer.update({ where: { id }, data });
    } catch {
      throw new NotFoundException('Trainer not found');
    }
  }

  async remove(id: string) {
    try {
      await this.prisma.trainer.delete({ where: { id } });
      return { success: true };
    } catch {
      throw new NotFoundException('Trainer not found');
    }
  }
}
