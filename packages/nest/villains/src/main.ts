import { NestFactory } from '@nestjs/core';
import { VillainsModule } from './villains.module';

async function bootstrap() {
  const app = await NestFactory.create(VillainsModule);
  await app.listen(3000);
}
bootstrap();
