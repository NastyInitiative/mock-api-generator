import { Test, TestingModule } from '@nestjs/testing';
import { ApiContractsController } from './api-contracts.controller';

describe('ApiContractsController', () => {
  let controller: ApiContractsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ApiContractsController],
    }).compile();

    controller = module.get<ApiContractsController>(ApiContractsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
