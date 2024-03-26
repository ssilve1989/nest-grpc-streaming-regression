import { Test, TestingModule } from '@nestjs/testing';
import { VillainsController } from './villains.controller';
import { VillainsService } from './villains.service';

describe('VillainsController', () => {
  let villainsController: VillainsController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [VillainsController],
      providers: [VillainsService],
    }).compile();

    villainsController = app.get<VillainsController>(VillainsController);
  });

  describe('root', () => {
    it('should return "Hello World!"', () => {
      expect(villainsController.getHello()).toBe('Hello World!');
    });
  });
});
