import { Inject, Module, OnApplicationBootstrap } from '@nestjs/common';
import { ClientGrpc, ClientsModule, Transport } from '@nestjs/microservices';
import path from 'node:path';
import { NestFactory } from '@nestjs/core';
import { EchoServiceClient } from './interfaces/echo_service';

@Module({
  imports: [
    ClientsModule.register([
      {
        name: 'echo',
        transport: Transport.GRPC,
        options: {
          package: 'echo',
          protoPath: path.join(__dirname, './proto/echo_service.proto'),
          url: 'localhost:5000',
        },
      },
    ]),
  ],
  controllers: [],
  providers: [],
})
export class AppModule implements OnApplicationBootstrap {
  private readonly echoServiceClient: EchoServiceClient;

  constructor(@Inject('echo') private readonly proxy: ClientGrpc) {
    this.echoServiceClient = this.proxy.getService('EchoService');
  }

  onApplicationBootstrap() {
    this.echoServiceClient.streamEcho({ message: 'Hello, world!' }).subscribe({
      next: (response) => {
        console.log(response);
      },
      error: (error) => {
        console.error(error);
      },
      complete: () => {
        console.log('complete');
      },
    });
  }
}

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(3000);
}

bootstrap();
