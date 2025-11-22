import { Test, TestingModule } from '@nestjs/testing';
import { PlansController } from './plans.controller';
import { PlansService } from './plans.service';
import { CreatePlanDto } from './dto/create-plan.dto';
import { UpdatePlanDto, AddExercisesDto } from './dto/update-plan.dto';
import { NotFoundException } from '@nestjs/common';

describe('PlansController', () => {
  let controller: PlansController;
  let service: PlansService;

  const mockPlan = {
    id: '507f1f77bcf86cd799439011',
    title: 'План для начинающих',
    description: 'Базовый план тренировок',
    goal: 'Набор мышечной массы',
    difficulty: 'EASY',
    creatorId: '507f1f77bcf86cd799439021',
    clientId: '507f1f77bcf86cd799439031',
    exercises: [
      {
        name: 'Приседания',
        description: 'Базовое упражнение',
        sets: 3,
        reps: 12,
        durationSec: null,
      },
    ],
    createdAt: new Date(),
    updatedAt: new Date(),
  };

  const mockPlansService = {
    create: jest.fn(),
    findById: jest.fn(),
    findMany: jest.fn(),
    update: jest.fn(),
    remove: jest.fn(),
    addExercises: jest.fn(),
    clone: jest.fn(),
  };

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PlansController],
      providers: [
        {
          provide: PlansService,
          useValue: mockPlansService,
        },
      ],
    }).compile();

    controller = module.get<PlansController>(PlansController);
    service = module.get<PlansService>(PlansService);
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  describe('create', () => {
    it('должен создать новый план тренировок', async () => {
      const createDto: CreatePlanDto = {
        title: 'План для начинающих',
        description: 'Базовый план тренировок',
        goal: 'Набор мышечной массы',
        difficulty: 'EASY',
        creatorId: '507f1f77bcf86cd799439021',
        clientId: '507f1f77bcf86cd799439031',
        exercises: [
          {
            name: 'Приседания',
            description: 'Базовое упражнение',
            sets: 3,
            reps: 12,
          },
        ],
      };

      mockPlansService.create.mockResolvedValue(mockPlan);

      const result = await controller.create(createDto);

      expect(service.create).toHaveBeenCalledWith(createDto);
      expect(result).toEqual(mockPlan);
    });

    it('должен создать план без опциональных полей', async () => {
      const createDto: CreatePlanDto = {
        title: 'План для продвинутых',
        goal: 'Похудение',
        difficulty: 'HARD',
        creatorId: '507f1f77bcf86cd799439021',
      };

      const minimalPlan = {
        ...mockPlan,
        ...createDto,
        description: null,
        clientId: null,
        exercises: [],
      };

      mockPlansService.create.mockResolvedValue(minimalPlan);

      const result = await controller.create(createDto);

      expect(service.create).toHaveBeenCalledWith(createDto);
      expect(result).toEqual(minimalPlan);
    });
  });

  describe('getById', () => {
    it('должен вернуть план по id', async () => {
      const planId = '507f1f77bcf86cd799439011';
      mockPlansService.findById.mockResolvedValue(mockPlan);

      const result = await controller.getById(planId);

      expect(service.findById).toHaveBeenCalledWith(planId);
      expect(result).toEqual(mockPlan);
    });

    it('должен вернуть null, если план не найден', async () => {
      const planId = '507f1f77bcf86cd799439999';
      mockPlansService.findById.mockResolvedValue(null);

      const result = await controller.getById(planId);

      expect(service.findById).toHaveBeenCalledWith(planId);
      expect(result).toBeNull();
    });
  });

  describe('list', () => {
    it('должен вернуть массив всех планов', async () => {
      const plans = [mockPlan, { ...mockPlan, id: '507f1f77bcf86cd799439012' }];
      mockPlansService.findMany.mockResolvedValue(plans);

      const result = await controller.list();

      expect(service.findMany).toHaveBeenCalledWith({
        difficulty: undefined,
        clientId: undefined,
      });
      expect(result).toEqual(plans);
    });

    it('должен вернуть планы по сложности', async () => {
      const difficulty = 'EASY';
      const plans = [mockPlan];
      mockPlansService.findMany.mockResolvedValue(plans);

      const result = await controller.list(difficulty);

      expect(service.findMany).toHaveBeenCalledWith({
        difficulty,
        clientId: undefined,
      });
      expect(result).toEqual(plans);
    });

    it('должен вернуть планы по clientId', async () => {
      const clientId = '507f1f77bcf86cd799439031';
      const plans = [mockPlan];
      mockPlansService.findMany.mockResolvedValue(plans);

      const result = await controller.list(undefined, clientId);

      expect(service.findMany).toHaveBeenCalledWith({
        difficulty: undefined,
        clientId,
      });
      expect(result).toEqual(plans);
    });

    it('должен вернуть планы по сложности и clientId', async () => {
      const difficulty = 'MEDIUM';
      const clientId = '507f1f77bcf86cd799439031';
      const plans = [mockPlan];
      mockPlansService.findMany.mockResolvedValue(plans);

      const result = await controller.list(difficulty, clientId);

      expect(service.findMany).toHaveBeenCalledWith({
        difficulty,
        clientId,
      });
      expect(result).toEqual(plans);
    });

    it('должен вернуть пустой массив, если планов нет', async () => {
      mockPlansService.findMany.mockResolvedValue([]);

      const result = await controller.list();

      expect(service.findMany).toHaveBeenCalledWith({
        difficulty: undefined,
        clientId: undefined,
      });
      expect(result).toEqual([]);
    });
  });

  describe('update', () => {
    it('должен обновить план тренировок', async () => {
      const planId = '507f1f77bcf86cd799439011';
      const updateDto: UpdatePlanDto = {
        title: 'Обновленный план',
        difficulty: 'MEDIUM',
      };

      const updatedPlan = {
        ...mockPlan,
        ...updateDto,
      };

      mockPlansService.update.mockResolvedValue(updatedPlan);

      const result = await controller.update(planId, updateDto);

      expect(service.update).toHaveBeenCalledWith(planId, updateDto);
      expect(result).toEqual(updatedPlan);
    });

    it('должен выбросить NotFoundException, если план не найден', async () => {
      const planId = '507f1f77bcf86cd799439999';
      const updateDto: UpdatePlanDto = { title: 'Обновленный план' };

      mockPlansService.update.mockRejectedValue(
        new NotFoundException('Training plan not found'),
      );

      await expect(controller.update(planId, updateDto)).rejects.toThrow(
        NotFoundException,
      );
      expect(service.update).toHaveBeenCalledWith(planId, updateDto);
    });
  });

  describe('remove', () => {
    it('должен удалить план тренировок', async () => {
      const planId = '507f1f77bcf86cd799439011';
      mockPlansService.remove.mockResolvedValue({ success: true });

      const result = await controller.remove(planId);

      expect(service.remove).toHaveBeenCalledWith(planId);
      expect(result).toEqual({ success: true });
    });

    it('должен выбросить NotFoundException, если план не найден', async () => {
      const planId = '507f1f77bcf86cd799439999';
      mockPlansService.remove.mockRejectedValue(
        new NotFoundException('Training plan not found'),
      );

      await expect(controller.remove(planId)).rejects.toThrow(
        NotFoundException,
      );
      expect(service.remove).toHaveBeenCalledWith(planId);
    });
  });

  describe('addExercises', () => {
    it('должен добавить упражнения в план', async () => {
      const planId = '507f1f77bcf86cd799439011';
      const addExercisesDto: AddExercisesDto = {
        exercises: [
          {
            name: 'Отжимания',
            description: 'Новое упражнение',
            sets: 4,
            reps: 15,
          },
        ],
      };

      const updatedPlan = {
        ...mockPlan,
        exercises: [...mockPlan.exercises, ...addExercisesDto.exercises],
      };

      mockPlansService.addExercises.mockResolvedValue(updatedPlan);

      const result = await controller.addExercises(planId, addExercisesDto);

      expect(service.addExercises).toHaveBeenCalledWith(
        planId,
        addExercisesDto.exercises ?? [],
      );
      expect(result).toEqual(updatedPlan);
    });

    it('должен обработать пустой массив упражнений', async () => {
      const planId = '507f1f77bcf86cd799439011';
      const addExercisesDto: AddExercisesDto = {
        exercises: [],
      };

      mockPlansService.addExercises.mockResolvedValue(mockPlan);

      const result = await controller.addExercises(planId, addExercisesDto);

      expect(service.addExercises).toHaveBeenCalledWith(planId, []);
      expect(result).toEqual(mockPlan);
    });

    it('должен обработать undefined exercises', async () => {
      const planId = '507f1f77bcf86cd799439011';
      const addExercisesDto: AddExercisesDto = {
        exercises: undefined as any,
      };

      mockPlansService.addExercises.mockResolvedValue(mockPlan);

      const result = await controller.addExercises(planId, addExercisesDto);

      expect(service.addExercises).toHaveBeenCalledWith(planId, []);
      expect(result).toEqual(mockPlan);
    });

    it('должен выбросить NotFoundException, если план не найден', async () => {
      const planId = '507f1f77bcf86cd799439999';
      const addExercisesDto: AddExercisesDto = {
        exercises: [
          {
            name: 'Новое упражнение',
            sets: 3,
            reps: 10,
          },
        ],
      };

      mockPlansService.addExercises.mockRejectedValue(
        new NotFoundException('Training plan not found'),
      );

      await expect(
        controller.addExercises(planId, addExercisesDto),
      ).rejects.toThrow(NotFoundException);
      expect(service.addExercises).toHaveBeenCalledWith(
        planId,
        addExercisesDto.exercises ?? [],
      );
    });
  });

  describe('clone', () => {
    it('должен клонировать план тренировок', async () => {
      const planId = '507f1f77bcf86cd799439011';
      const clonedPlan = {
        ...mockPlan,
        id: '507f1f77bcf86cd799439012',
        title: 'План для начинающих (Copy)',
      };

      mockPlansService.clone.mockResolvedValue(clonedPlan);

      const result = await controller.clone(planId);

      expect(service.clone).toHaveBeenCalledWith(planId);
      expect(result).toEqual(clonedPlan);
    });

    it('должен выбросить NotFoundException, если план не найден', async () => {
      const planId = '507f1f77bcf86cd799439999';
      mockPlansService.clone.mockRejectedValue(
        new NotFoundException('Training plan not found'),
      );

      await expect(controller.clone(planId)).rejects.toThrow(NotFoundException);
      expect(service.clone).toHaveBeenCalledWith(planId);
    });
  });
});
