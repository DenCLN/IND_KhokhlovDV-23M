import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateClientDto } from './dto/create-client.dto';
import { UpdateClientDto } from './dto/update-client.dto';

@Injectable()
export class ClientsService {
  constructor(private readonly prisma: PrismaService) {}

  create(data: CreateClientDto) {
    const { dateOfBirth, ...rest } = data;
    return this.prisma.client.create({
      data: {
        ...rest,
        ...(dateOfBirth ? { dateOfBirth: new Date(dateOfBirth) } : {}),
      },
    });
  }

  findAll() {
    return this.prisma.client.findMany({ orderBy: { createdAt: 'desc' } });
  }

  async findOne(id: string) {
    const client = await this.prisma.client.findUnique({ where: { id } });
    if (!client) throw new NotFoundException('Client not found');
    return client;
  }

  async update(id: string, data: UpdateClientDto) {
    const { dateOfBirth, ...rest } = data;
    try {
      return await this.prisma.client.update({
        where: { id },
        data: {
          ...rest,
          dateOfBirth: dateOfBirth ? new Date(dateOfBirth) : undefined,
        },
      });
    } catch {
      throw new NotFoundException('Client not found');
    }
  }

  async remove(id: string) {
    try {
      await this.prisma.client.delete({ where: { id } });
      return { success: true };
    } catch {
      throw new NotFoundException('Client not found');
    }
  }
}
