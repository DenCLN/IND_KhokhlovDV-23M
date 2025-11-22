import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaModule } from './prisma/prisma.module';
import { ClientsModule } from './clients/clients.module';
import { TrainersModule } from './trainers/trainers.module';
import { PlansModule } from './plans/plans.module';
import { ExercisesModule } from './exercises/exercises.module';

@Module({
  imports: [
    PrismaModule,
    ClientsModule,
    TrainersModule,
    PlansModule,
    ExercisesModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
