import { Test, TestingModule } from '@nestjs/testing';
import { HeroesController } from './heroes.controller';
import { HeroesService } from './heroes.service';

describe('HeroesController', () => {
  let heroesController: HeroesController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [HeroesController],
      providers: [HeroesService],
    }).compile();

    heroesController = app.get<HeroesController>(HeroesController);
  });

  describe('root', () => {
    it('should return "Hello World!"', () => {
      expect(heroesController.getHello()).toBe('Hello World!');
    });
  });
});
