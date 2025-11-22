declare enum Difficulty {
    EASY = "EASY",
    MEDIUM = "MEDIUM",
    HARD = "HARD"
}
export declare class ExerciseDto {
    exerciseLibraryId?: string;
    name: string;
    description?: string;
    sets?: number;
    reps?: number;
    durationSec?: number;
}
export declare class CreatePlanDto {
    title: string;
    description?: string;
    goal: string;
    difficulty: Difficulty;
    creatorId: string;
    clientId?: string;
    exercises?: ExerciseDto[];
}
export {};
