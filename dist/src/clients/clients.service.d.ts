import { PrismaService } from '../prisma/prisma.service';
import { CreateClientDto } from './dto/create-client.dto';
import { UpdateClientDto } from './dto/update-client.dto';
export declare class ClientsService {
    private readonly prisma;
    constructor(prisma: PrismaService);
    create(data: CreateClientDto): import("@prisma/client").Prisma.Prisma__ClientClient<{
        firstName: string;
        lastName: string;
        email: string;
        phone: string | null;
        dateOfBirth: Date | null;
        notes: string | null;
        id: string;
        createdAt: Date;
        updatedAt: Date;
    }, never, import("@prisma/client/runtime/library").DefaultArgs, import("@prisma/client").Prisma.PrismaClientOptions>;
    findAll(): import("@prisma/client").Prisma.PrismaPromise<{
        firstName: string;
        lastName: string;
        email: string;
        phone: string | null;
        dateOfBirth: Date | null;
        notes: string | null;
        id: string;
        createdAt: Date;
        updatedAt: Date;
    }[]>;
    findOne(id: string): Promise<{
        firstName: string;
        lastName: string;
        email: string;
        phone: string | null;
        dateOfBirth: Date | null;
        notes: string | null;
        id: string;
        createdAt: Date;
        updatedAt: Date;
    }>;
    update(id: string, data: UpdateClientDto): Promise<{
        firstName: string;
        lastName: string;
        email: string;
        phone: string | null;
        dateOfBirth: Date | null;
        notes: string | null;
        id: string;
        createdAt: Date;
        updatedAt: Date;
    }>;
    remove(id: string): Promise<{
        success: boolean;
    }>;
}
