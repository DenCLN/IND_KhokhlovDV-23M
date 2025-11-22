import { Test, TestingModule } from '@nestjs/testing';
import { ClientsController } from './clients.controller';
import { ClientsService } from './clients.service';
import { CreateClientDto } from './dto/create-client.dto';
import { UpdateClientDto } from './dto/update-client.dto';
import { NotFoundException } from '@nestjs/common';

describe('ClientsController', () => {
  let controller: ClientsController;
  let service: ClientsService;

  const mockClient = {
    id: '507f1f77bcf86cd799439011',
    firstName: 'Иван',
    lastName: 'Иванов',
    email: 'ivan@example.com',
    phone: '+79991234567',
    dateOfBirth: new Date('1990-01-01'),
    notes: 'Тестовый клиент',
    createdAt: new Date(),
    updatedAt: new Date(),
  };

  const mockClientsService = {
    create: jest.fn(),
    findAll: jest.fn(),
    findOne: jest.fn(),
    update: jest.fn(),
    remove: jest.fn(),
  };

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ClientsController],
      providers: [
        {
          provide: ClientsService,
          useValue: mockClientsService,
        },
      ],
    }).compile();

    controller = module.get<ClientsController>(ClientsController);
    service = module.get<ClientsService>(ClientsService);
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  describe('create', () => {
    it('должен создать нового клиента', async () => {
      const createDto: CreateClientDto = {
        firstName: 'Иван',
        lastName: 'Иванов',
        email: 'ivan@example.com',
        phone: '+79991234567',
        dateOfBirth: '1990-01-01',
        notes: 'Тестовый клиент',
      };

      mockClientsService.create.mockResolvedValue(mockClient);

      const result = await controller.create(createDto);

      expect(service.create).toHaveBeenCalledWith(createDto);
      expect(result).toEqual(mockClient);
    });

    it('должен создать клиента без опциональных полей', async () => {
      const createDto: CreateClientDto = {
        firstName: 'Петр',
        lastName: 'Петров',
        email: 'petr@example.com',
      };

      const minimalClient = {
        ...mockClient,
        ...createDto,
        phone: null,
        dateOfBirth: null,
        notes: null,
      };

      mockClientsService.create.mockResolvedValue(minimalClient);

      const result = await controller.create(createDto);

      expect(service.create).toHaveBeenCalledWith(createDto);
      expect(result).toEqual(minimalClient);
    });
  });

  describe('findAll', () => {
    it('должен вернуть массив всех клиентов', async () => {
      const clients = [mockClient, { ...mockClient, id: '507f1f77bcf86cd799439012' }];
      mockClientsService.findAll.mockResolvedValue(clients);

      const result = await controller.findAll();

      expect(service.findAll).toHaveBeenCalled();
      expect(result).toEqual(clients);
    });

    it('должен вернуть пустой массив, если клиентов нет', async () => {
      mockClientsService.findAll.mockResolvedValue([]);

      const result = await controller.findAll();

      expect(service.findAll).toHaveBeenCalled();
      expect(result).toEqual([]);
    });
  });

  describe('findOne', () => {
    it('должен вернуть клиента по id', async () => {
      const clientId = '507f1f77bcf86cd799439011';
      mockClientsService.findOne.mockResolvedValue(mockClient);

      const result = await controller.findOne(clientId);

      expect(service.findOne).toHaveBeenCalledWith(clientId);
      expect(result).toEqual(mockClient);
    });

    it('должен выбросить NotFoundException, если клиент не найден', async () => {
      const clientId = '507f1f77bcf86cd799439999';
      mockClientsService.findOne.mockRejectedValue(
        new NotFoundException('Client not found'),
      );

      await expect(controller.findOne(clientId)).rejects.toThrow(
        NotFoundException,
      );
      expect(service.findOne).toHaveBeenCalledWith(clientId);
    });
  });

  describe('update', () => {
    it('должен обновить клиента', async () => {
      const clientId = '507f1f77bcf86cd799439011';
      const updateDto: UpdateClientDto = {
        firstName: 'Обновленное',
        phone: '+79999999999',
      };

      const updatedClient = {
        ...mockClient,
        ...updateDto,
      };

      mockClientsService.update.mockResolvedValue(updatedClient);

      const result = await controller.update(clientId, updateDto);

      expect(service.update).toHaveBeenCalledWith(clientId, updateDto);
      expect(result).toEqual(updatedClient);
    });

    it('должен выбросить NotFoundException, если клиент не найден', async () => {
      const clientId = '507f1f77bcf86cd799439999';
      const updateDto: UpdateClientDto = { firstName: 'Обновленное' };

      mockClientsService.update.mockRejectedValue(
        new NotFoundException('Client not found'),
      );

      await expect(controller.update(clientId, updateDto)).rejects.toThrow(
        NotFoundException,
      );
      expect(service.update).toHaveBeenCalledWith(clientId, updateDto);
    });
  });

  describe('remove', () => {
    it('должен удалить клиента', async () => {
      const clientId = '507f1f77bcf86cd799439011';
      mockClientsService.remove.mockResolvedValue({ success: true });

      const result = await controller.remove(clientId);

      expect(service.remove).toHaveBeenCalledWith(clientId);
      expect(result).toEqual({ success: true });
    });

    it('должен выбросить NotFoundException, если клиент не найден', async () => {
      const clientId = '507f1f77bcf86cd799439999';
      mockClientsService.remove.mockRejectedValue(
        new NotFoundException('Client not found'),
      );

      await expect(controller.remove(clientId)).rejects.toThrow(
        NotFoundException,
      );
      expect(service.remove).toHaveBeenCalledWith(clientId);
    });
  });
});

