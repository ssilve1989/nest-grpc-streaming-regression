import { Controller, Get } from '@nestjs/common';
import { VillainsService } from './villains.service';

@Controller()
export class VillainsController {
  constructor(private readonly villainsService: VillainsService) {}

  @Get()
  getHello(): string {
    return this.villainsService.getHello();
  }
}
