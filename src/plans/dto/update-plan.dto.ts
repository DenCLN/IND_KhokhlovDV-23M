import { PartialType } from '@nestjs/mapped-types';
import { CreatePlanDto, ExerciseDto } from './create-plan.dto';

export class UpdatePlanDto extends PartialType(CreatePlanDto) {}

export class AddExercisesDto {
  exercises: ExerciseDto[];
}



