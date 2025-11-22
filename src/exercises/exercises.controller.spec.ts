import { Test, TestingModule } from '@nestjs/testing';
import { ExercisesController } from './exercises.controller';
import { ExercisesService } from './exercises.service';
import { CreateExerciseDto } from './dto/create-exercise.dto';
import { UpdateExerciseDto } from './dto/update-exercise.dto';
import { NotFoundException } from '@nestjs/common';

describe('ExercisesController', () => {
  let controller: ExercisesController;
  let service: ExercisesService;

  const mockExercise = {
    id: '507f1f77bcf86cd799439011',
    name: 'Приседания',
    description: 'Базовое упражнение для ног',
    muscleGroup: 'Ноги',
    photoUrl: 'https://example.com/photo.jpg',
    videoUrl: 'https://example.com/video.mp4',
    techniqueUrl: 'https://example.com/technique.pdf',
    createdAt: new Date(),
    updatedAt: new Date(),
  };

  const mockExercisesService = {
    create: jest.fn(),
    findAll: jest.fn(),
    findOne: jest.fn(),
    update: jest.fn(),
    remove: jest.fn(),
  };

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ExercisesController],
      providers: [
        {
          provide: ExercisesService,
          useValue: mockExercisesService,
        },
      ],
    }).compile();

    controller = module.get<ExercisesController>(ExercisesController);
    service = module.get<ExercisesService>(ExercisesService);
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  describe('create', () => {
    it('должен создать новое упражнение', async () => {
      const createDto: CreateExerciseDto = {
        name: 'Приседания',
        description: 'Базовое упражнение для ног',
        muscleGroup: 'Ноги',
        photoUrl: 'https://example.com/photo.jpg',
        videoUrl: 'https://example.com/video.mp4',
        techniqueUrl: 'https://example.com/technique.pdf',
      };

      mockExercisesService.create.mockResolvedValue(mockExercise);

      const result = await controller.create(createDto);

      expect(service.create).toHaveBeenCalledWith(createDto);
      expect(result).toEqual(mockExercise);
    });

    it('должен создать упражнение без опциональных полей', async () => {
      const createDto: CreateExerciseDto = {
        name: 'Отжимания',
        muscleGroup: 'Грудь',
      };

      const minimalExercise = {
        ...mockExercise,
        ...createDto,
        description: null,
        photoUrl: null,
        videoUrl: null,
        techniqueUrl: null,
      };

      mockExercisesService.create.mockResolvedValue(minimalExercise);

      const result = await controller.create(createDto);

      expect(service.create).toHaveBeenCalledWith(createDto);
      expect(result).toEqual(minimalExercise);
    });
  });

  describe('findAll', () => {
    it('должен вернуть массив всех упражнений', async () => {
      const exercises = [
        mockExercise,
        { ...mockExercise, id: '507f1f77bcf86cd799439012' },
      ];
      mockExercisesService.findAll.mockResolvedValue(exercises);

      const result = await controller.findAll();

      expect(service.findAll).toHaveBeenCalledWith(undefined);
      expect(result).toEqual(exercises);
    });

    it('должен вернуть упражнения по группе мышц', async () => {
      const muscleGroup = 'Ноги';
      const exercises = [mockExercise];
      mockExercisesService.findAll.mockResolvedValue(exercises);

      const result = await controller.findAll(muscleGroup);

      expect(service.findAll).toHaveBeenCalledWith(muscleGroup);
      expect(result).toEqual(exercises);
    });

    it('должен вернуть пустой массив, если упражнений нет', async () => {
      mockExercisesService.findAll.mockResolvedValue([]);

      const result = await controller.findAll();

      expect(service.findAll).toHaveBeenCalledWith(undefined);
      expect(result).toEqual([]);
    });
  });

  describe('findOne', () => {
    it('должен вернуть упражнение по id', async () => {
      const exerciseId = '507f1f77bcf86cd799439011';
      mockExercisesService.findOne.mockResolvedValue(mockExercise);

      const result = await controller.findOne(exerciseId);

      expect(service.findOne).toHaveBeenCalledWith(exerciseId);
      expect(result).toEqual(mockExercise);
    });

    it('должен выбросить NotFoundException, если упражнение не найдено', async () => {
      const exerciseId = '507f1f77bcf86cd799439999';
      mockExercisesService.findOne.mockRejectedValue(
        new NotFoundException('Exercise not found'),
      );

      await expect(controller.findOne(exerciseId)).rejects.toThrow(
        NotFoundException,
      );
      expect(service.findOne).toHaveBeenCalledWith(exerciseId);
    });
  });

  describe('update', () => {
    it('должен обновить упражнение', async () => {
      const exerciseId = '507f1f77bcf86cd799439011';
      const updateDto: UpdateExerciseDto = {
        name: 'Глубокие приседания',
        description: 'Обновленное описание',
      };

      const updatedExercise = {
        ...mockExercise,
        ...updateDto,
      };

      mockExercisesService.update.mockResolvedValue(updatedExercise);

      const result = await controller.update(exerciseId, updateDto);

      expect(service.update).toHaveBeenCalledWith(exerciseId, updateDto);
      expect(result).toEqual(updatedExercise);
    });

    it('должен выбросить NotFoundException, если упражнение не найдено', async () => {
      const exerciseId = '507f1f77bcf86cd799439999';
      const updateDto: UpdateExerciseDto = { name: 'Обновленное' };

      mockExercisesService.update.mockRejectedValue(
        new NotFoundException('Exercise not found'),
      );

      await expect(controller.update(exerciseId, updateDto)).rejects.toThrow(
        NotFoundException,
      );
      expect(service.update).toHaveBeenCalledWith(exerciseId, updateDto);
    });
  });

  describe('remove', () => {
    it('должен удалить упражнение', async () => {
      const exerciseId = '507f1f77bcf86cd799439011';
      mockExercisesService.remove.mockResolvedValue({ success: true });

      const result = await controller.remove(exerciseId);

      expect(service.remove).toHaveBeenCalledWith(exerciseId);
      expect(result).toEqual({ success: true });
    });

    it('должен выбросить NotFoundException, если упражнение не найдено', async () => {
      const exerciseId = '507f1f77bcf86cd799439999';
      mockExercisesService.remove.mockRejectedValue(
        new NotFoundException('Exercise not found'),
      );

      await expect(controller.remove(exerciseId)).rejects.toThrow(
        NotFoundException,
      );
      expect(service.remove).toHaveBeenCalledWith(exerciseId);
    });
  });
});
