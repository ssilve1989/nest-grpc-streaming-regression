import { Module } from '@nestjs/common';
import { VillainsController } from './villains.controller';
import { VillainsService } from './villains.service';

@Module({
  imports: [],
  controllers: [VillainsController],
  providers: [VillainsService],
})
export class VillainsModule {}
