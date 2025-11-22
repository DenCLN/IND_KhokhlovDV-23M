import { TrainersService } from './trainers.service';
import { CreateTrainerDto } from './dto/create-trainer.dto';
import { UpdateTrainerDto } from './dto/update-trainer.dto';
export declare class TrainersController {
    private readonly trainersService;
    constructor(trainersService: TrainersService);
    create(dto: CreateTrainerDto): import("@prisma/client").Prisma.Prisma__TrainerClient<{
        firstName: string;
        lastName: string;
        email: string;
        phone: string | null;
        id: string;
        createdAt: Date;
        updatedAt: Date;
        specialization: string;
        experienceYears: number;
        about: string | null;
    }, never, import("@prisma/client/runtime/library").DefaultArgs, import("@prisma/client").Prisma.PrismaClientOptions>;
    findAll(specialization?: string): import("@prisma/client").Prisma.PrismaPromise<{
        firstName: string;
        lastName: string;
        email: string;
        phone: string | null;
        id: string;
        createdAt: Date;
        updatedAt: Date;
        specialization: string;
        experienceYears: number;
        about: string | null;
    }[]>;
    findOne(id: string): Promise<{
        firstName: string;
        lastName: string;
        email: string;
        phone: string | null;
        id: string;
        createdAt: Date;
        updatedAt: Date;
        specialization: string;
        experienceYears: number;
        about: string | null;
    }>;
    update(id: string, dto: UpdateTrainerDto): Promise<{
        firstName: string;
        lastName: string;
        email: string;
        phone: string | null;
        id: string;
        createdAt: Date;
        updatedAt: Date;
        specialization: string;
        experienceYears: number;
        about: string | null;
    }>;
    remove(id: string): Promise<{
        success: boolean;
    }>;
}
