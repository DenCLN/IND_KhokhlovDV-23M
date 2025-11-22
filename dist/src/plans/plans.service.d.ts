import { PrismaService } from '../prisma/prisma.service';
import { CreatePlanDto } from './dto/create-plan.dto';
import { UpdatePlanDto } from './dto/update-plan.dto';
export declare class PlansService {
    private readonly prisma;
    constructor(prisma: PrismaService);
    create(data: CreatePlanDto): Promise<{
        id: string;
        createdAt: Date;
        updatedAt: Date;
        description: string | null;
        title: string;
        goal: string;
        difficulty: import("@prisma/client").$Enums.Difficulty;
        creatorId: string;
        clientId: string | null;
        exercises: {
            exerciseLibraryId: string | null;
            name: string;
            description: string | null;
            sets: number | null;
            reps: number | null;
            durationSec: number | null;
        }[];
    }>;
    findById(id: string): import("@prisma/client").Prisma.Prisma__TrainingPlanClient<{
        id: string;
        createdAt: Date;
        updatedAt: Date;
        description: string | null;
        title: string;
        goal: string;
        difficulty: import("@prisma/client").$Enums.Difficulty;
        creatorId: string;
        clientId: string | null;
        exercises: {
            exerciseLibraryId: string | null;
            name: string;
            description: string | null;
            sets: number | null;
            reps: number | null;
            durationSec: number | null;
        }[];
    } | null, null, import("@prisma/client/runtime/library").DefaultArgs, import("@prisma/client").Prisma.PrismaClientOptions>;
    findMany(params: {
        difficulty?: string;
        clientId?: string;
    }): import("@prisma/client").Prisma.PrismaPromise<{
        id: string;
        createdAt: Date;
        updatedAt: Date;
        description: string | null;
        title: string;
        goal: string;
        difficulty: import("@prisma/client").$Enums.Difficulty;
        creatorId: string;
        clientId: string | null;
        exercises: {
            exerciseLibraryId: string | null;
            name: string;
            description: string | null;
            sets: number | null;
            reps: number | null;
            durationSec: number | null;
        }[];
    }[]>;
    update(id: string, data: UpdatePlanDto): Promise<{
        id: string;
        createdAt: Date;
        updatedAt: Date;
        description: string | null;
        title: string;
        goal: string;
        difficulty: import("@prisma/client").$Enums.Difficulty;
        creatorId: string;
        clientId: string | null;
        exercises: {
            exerciseLibraryId: string | null;
            name: string;
            description: string | null;
            sets: number | null;
            reps: number | null;
            durationSec: number | null;
        }[];
    }>;
    remove(id: string): Promise<{
        success: boolean;
    }>;
    addExercises(id: string, exercises: any[]): Promise<{
        id: string;
        createdAt: Date;
        updatedAt: Date;
        description: string | null;
        title: string;
        goal: string;
        difficulty: import("@prisma/client").$Enums.Difficulty;
        creatorId: string;
        clientId: string | null;
        exercises: {
            exerciseLibraryId: string | null;
            name: string;
            description: string | null;
            sets: number | null;
            reps: number | null;
            durationSec: number | null;
        }[];
    }>;
    clone(id: string): Promise<{
        id: string;
        createdAt: Date;
        updatedAt: Date;
        description: string | null;
        title: string;
        goal: string;
        difficulty: import("@prisma/client").$Enums.Difficulty;
        creatorId: string;
        clientId: string | null;
        exercises: {
            exerciseLibraryId: string | null;
            name: string;
            description: string | null;
            sets: number | null;
            reps: number | null;
            durationSec: number | null;
        }[];
    }>;
}
