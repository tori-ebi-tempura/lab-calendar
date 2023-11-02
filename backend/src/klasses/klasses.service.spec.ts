import { Test, TestingModule } from '@nestjs/testing';
import { KlassesService } from './klasses.service';

describe('KlassesService', () => {
  let service: KlassesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [KlassesService],
    }).compile();

    service = module.get<KlassesService>(KlassesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
