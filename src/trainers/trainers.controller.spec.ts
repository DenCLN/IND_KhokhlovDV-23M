import { Test, TestingModule } from '@nestjs/testing';
import { TrainersController } from './trainers.controller';
import { TrainersService } from './trainers.service';
import { CreateTrainerDto } from './dto/create-trainer.dto';
import { UpdateTrainerDto } from './dto/update-trainer.dto';
import { NotFoundException } from '@nestjs/common';

describe('TrainersController', () => {
  let controller: TrainersController;
  let service: TrainersService;

  const mockTrainer = {
    id: '507f1f77bcf86cd799439011',
    firstName: 'Алексей',
    lastName: 'Тренеров',
    email: 'trainer@example.com',
    phone: '+79991234567',
    specialization: 'Силовые тренировки',
    experienceYears: 5,
    about: 'Опытный тренер',
    createdAt: new Date(),
    updatedAt: new Date(),
  };

  const mockTrainersService = {
    create: jest.fn(),
    findAll: jest.fn(),
    findOne: jest.fn(),
    update: jest.fn(),
    remove: jest.fn(),
  };

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [TrainersController],
      providers: [
        {
          provide: TrainersService,
          useValue: mockTrainersService,
        },
      ],
    }).compile();

    controller = module.get<TrainersController>(TrainersController);
    service = module.get<TrainersService>(TrainersService);
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  describe('create', () => {
    it('должен создать нового тренера', async () => {
      const createDto: CreateTrainerDto = {
        firstName: 'Алексей',
        lastName: 'Тренеров',
        email: 'trainer@example.com',
        phone: '+79991234567',
        specialization: 'Силовые тренировки',
        experienceYears: 5,
        about: 'Опытный тренер',
      };

      mockTrainersService.create.mockResolvedValue(mockTrainer);

      const result = await controller.create(createDto);

      expect(service.create).toHaveBeenCalledWith(createDto);
      expect(result).toEqual(mockTrainer);
    });

    it('должен создать тренера без опциональных полей', async () => {
      const createDto: CreateTrainerDto = {
        firstName: 'Петр',
        lastName: 'Петров',
        email: 'petr@example.com',
        specialization: 'Кардио',
        experienceYears: 3,
      };

      const minimalTrainer = {
        ...mockTrainer,
        ...createDto,
        phone: null,
        about: null,
      };

      mockTrainersService.create.mockResolvedValue(minimalTrainer);

      const result = await controller.create(createDto);

      expect(service.create).toHaveBeenCalledWith(createDto);
      expect(result).toEqual(minimalTrainer);
    });
  });

  describe('findAll', () => {
    it('должен вернуть массив всех тренеров', async () => {
      const trainers = [mockTrainer, { ...mockTrainer, id: '507f1f77bcf86cd799439012' }];
      mockTrainersService.findAll.mockResolvedValue(trainers);

      const result = await controller.findAll();

      expect(service.findAll).toHaveBeenCalledWith(undefined);
      expect(result).toEqual(trainers);
    });

    it('должен вернуть тренеров по специализации', async () => {
      const specialization = 'Силовые тренировки';
      const trainers = [mockTrainer];
      mockTrainersService.findAll.mockResolvedValue(trainers);

      const result = await controller.findAll(specialization);

      expect(service.findAll).toHaveBeenCalledWith(specialization);
      expect(result).toEqual(trainers);
    });

    it('должен вернуть пустой массив, если тренеров нет', async () => {
      mockTrainersService.findAll.mockResolvedValue([]);

      const result = await controller.findAll();

      expect(service.findAll).toHaveBeenCalledWith(undefined);
      expect(result).toEqual([]);
    });
  });

  describe('findOne', () => {
    it('должен вернуть тренера по id', async () => {
      const trainerId = '507f1f77bcf86cd799439011';
      mockTrainersService.findOne.mockResolvedValue(mockTrainer);

      const result = await controller.findOne(trainerId);

      expect(service.findOne).toHaveBeenCalledWith(trainerId);
      expect(result).toEqual(mockTrainer);
    });

    it('должен выбросить NotFoundException, если тренер не найден', async () => {
      const trainerId = '507f1f77bcf86cd799439999';
      mockTrainersService.findOne.mockRejectedValue(
        new NotFoundException('Trainer not found'),
      );

      await expect(controller.findOne(trainerId)).rejects.toThrow(
        NotFoundException,
      );
      expect(service.findOne).toHaveBeenCalledWith(trainerId);
    });
  });

  describe('update', () => {
    it('должен обновить тренера', async () => {
      const trainerId = '507f1f77bcf86cd799439011';
      const updateDto: UpdateTrainerDto = {
        specialization: 'Функциональный тренинг',
        experienceYears: 7,
      };

      const updatedTrainer = {
        ...mockTrainer,
        ...updateDto,
      };

      mockTrainersService.update.mockResolvedValue(updatedTrainer);

      const result = await controller.update(trainerId, updateDto);

      expect(service.update).toHaveBeenCalledWith(trainerId, updateDto);
      expect(result).toEqual(updatedTrainer);
    });

    it('должен выбросить NotFoundException, если тренер не найден', async () => {
      const trainerId = '507f1f77bcf86cd799439999';
      const updateDto: UpdateTrainerDto = { experienceYears: 10 };

      mockTrainersService.update.mockRejectedValue(
        new NotFoundException('Trainer not found'),
      );

      await expect(controller.update(trainerId, updateDto)).rejects.toThrow(
        NotFoundException,
      );
      expect(service.update).toHaveBeenCalledWith(trainerId, updateDto);
    });
  });

  describe('remove', () => {
    it('должен удалить тренера', async () => {
      const trainerId = '507f1f77bcf86cd799439011';
      mockTrainersService.remove.mockResolvedValue({ success: true });

      const result = await controller.remove(trainerId);

      expect(service.remove).toHaveBeenCalledWith(trainerId);
      expect(result).toEqual({ success: true });
    });

    it('должен выбросить NotFoundException, если тренер не найден', async () => {
      const trainerId = '507f1f77bcf86cd799439999';
      mockTrainersService.remove.mockRejectedValue(
        new NotFoundException('Trainer not found'),
      );

      await expect(controller.remove(trainerId)).rejects.toThrow(
        NotFoundException,
      );
      expect(service.remove).toHaveBeenCalledWith(trainerId);
    });
  });
});

