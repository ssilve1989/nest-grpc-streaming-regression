import { NestFactory } from '@nestjs/core';
import { HeroesModule } from './heroes.module';

async function bootstrap() {
  const app = await NestFactory.create(HeroesModule);
  await app.listen(3000);
}
bootstrap();
