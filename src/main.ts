import { NestFactory } from '@nestjs/core';
import { ReflectionService } from '@grpc/reflection';
import { GrpcOptions, Transport } from '@nestjs/microservices';
import { AppModule } from './app.module';
import path from 'node:path';

async function bootstrap() {
  const app = await NestFactory.createMicroservice<GrpcOptions>(AppModule, {
    transport: Transport.GRPC,
    options: {
      package: 'echo',
      protoPath: path.join(__dirname, './proto/echo_service.proto'),
      url: 'localhost:5000',
      onLoadPackageDefinition: (pkg, server) => {
        new ReflectionService(pkg).addToServer(server);
      },
    },
  });

  await app.listen();
  console.log('Echo Service started on localhost:5000');
}

bootstrap();
