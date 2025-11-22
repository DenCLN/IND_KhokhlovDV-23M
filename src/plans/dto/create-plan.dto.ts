import {
  IsArray,
  IsEnum,
  IsOptional,
  IsString,
  MaxLength,
  ValidateNested,
  IsInt,
  Min,
} from 'class-validator';
import { Type } from 'class-transformer';

enum Difficulty {
  EASY = 'EASY',
  MEDIUM = 'MEDIUM',
  HARD = 'HARD',
}

export class ExerciseDto {
  @IsOptional()
  @IsString()
  exerciseLibraryId?: string; // Optional: ссылка на ExerciseLibrary

  @IsString()
  @MaxLength(200)
  name: string;

  @IsOptional()
  @IsString()
  @MaxLength(2000)
  description?: string;

  @IsOptional()
  @IsInt()
  @Min(0)
  sets?: number;

  @IsOptional()
  @IsInt()
  @Min(0)
  reps?: number;

  @IsOptional()
  @IsInt()
  @Min(0)
  durationSec?: number;
}

export class CreatePlanDto {
  @IsString()
  @MaxLength(200)
  title: string;

  @IsOptional()
  @IsString()
  @MaxLength(4000)
  description?: string;

  @IsString()
  @MaxLength(200)
  goal: string;

  @IsEnum(Difficulty)
  difficulty: Difficulty;

  @IsString()
  creatorId: string; // trainer id (ObjectId as string)

  @IsOptional()
  @IsString()
  clientId?: string; // client id (ObjectId as string)

  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => ExerciseDto)
  exercises?: ExerciseDto[];
}



