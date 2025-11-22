import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Query,
} from '@nestjs/common';
import { PlansService } from './plans.service';
import { CreatePlanDto } from './dto/create-plan.dto';
import { AddExercisesDto, UpdatePlanDto } from './dto/update-plan.dto';

@Controller('plans')
export class PlansController {
  constructor(private readonly plansService: PlansService) {}

  @Post()
  create(@Body() dto: CreatePlanDto) {
    return this.plansService.create(dto);
  }

  @Get(':id')
  getById(@Param('id') id: string) {
    return this.plansService.findById(id);
  }

  @Get()
  list(
    @Query('difficulty') difficulty?: string,
    @Query('clientId') clientId?: string,
  ) {
    return this.plansService.findMany({ difficulty, clientId });
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() dto: UpdatePlanDto) {
    return this.plansService.update(id, dto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.plansService.remove(id);
  }

  @Post(':id/exercises')
  addExercises(@Param('id') id: string, @Body() body: AddExercisesDto) {
    return this.plansService.addExercises(id, body.exercises ?? []);
  }

  @Post(':id/clone')
  clone(@Param('id') id: string) {
    return this.plansService.clone(id);
  }
}
