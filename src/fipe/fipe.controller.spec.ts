import { Test, TestingModule } from '@nestjs/testing';
import { FipeController } from './fipe.controller';

describe('FipeController', () => {
  let controller: FipeController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [FipeController],
    }).compile();

    controller = module.get<FipeController>(FipeController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
