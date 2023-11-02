import { Test, TestingModule } from '@nestjs/testing';
import { KlassesController } from './klasses.controller';
import { KlassesService } from './klasses.service';

describe('KlassesController', () => {
  let controller: KlassesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [KlassesController],
      providers: [KlassesService],
    }).compile();

    controller = module.get<KlassesController>(KlassesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
