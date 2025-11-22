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
import { TrainersService } from './trainers.service';
import { CreateTrainerDto } from './dto/create-trainer.dto';
import { UpdateTrainerDto } from './dto/update-trainer.dto';

@Controller('trainers')
export class TrainersController {
  constructor(private readonly trainersService: TrainersService) {}

  @Post()
  create(@Body() dto: CreateTrainerDto) {
    return this.trainersService.create(dto);
  }

  @Get()
  findAll(@Query('specialization') specialization?: string) {
    return this.trainersService.findAll(specialization);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.trainersService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() dto: UpdateTrainerDto) {
    return this.trainersService.update(id, dto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.trainersService.remove(id);
  }
}
