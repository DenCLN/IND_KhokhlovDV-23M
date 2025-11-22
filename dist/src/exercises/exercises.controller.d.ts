import { ExercisesService } from './exercises.service';
import { CreateExerciseDto } from './dto/create-exercise.dto';
import { UpdateExerciseDto } from './dto/update-exercise.dto';
export declare class ExercisesController {
    private readonly exercisesService;
    constructor(exercisesService: ExercisesService);
    create(dto: CreateExerciseDto): import("@prisma/client").Prisma.Prisma__ExerciseLibraryClient<{
        id: string;
        createdAt: Date;
        updatedAt: Date;
        name: string;
        description: string | null;
        muscleGroup: string;
        photoUrl: string | null;
        videoUrl: string | null;
        techniqueUrl: string | null;
    }, never, import("@prisma/client/runtime/library").DefaultArgs, import("@prisma/client").Prisma.PrismaClientOptions>;
    findAll(muscleGroup?: string): import("@prisma/client").Prisma.PrismaPromise<{
        id: string;
        createdAt: Date;
        updatedAt: Date;
        name: string;
        description: string | null;
        muscleGroup: string;
        photoUrl: string | null;
        videoUrl: string | null;
        techniqueUrl: string | null;
    }[]>;
    findOne(id: string): Promise<{
        id: string;
        createdAt: Date;
        updatedAt: Date;
        name: string;
        description: string | null;
        muscleGroup: string;
        photoUrl: string | null;
        videoUrl: string | null;
        techniqueUrl: string | null;
    }>;
    update(id: string, dto: UpdateExerciseDto): Promise<{
        id: string;
        createdAt: Date;
        updatedAt: Date;
        name: string;
        description: string | null;
        muscleGroup: string;
        photoUrl: string | null;
        videoUrl: string | null;
        techniqueUrl: string | null;
    }>;
    remove(id: string): Promise<{
        success: boolean;
    }>;
}
