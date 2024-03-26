import { Controller } from '@nestjs/common';
import { GrpcMethod } from '@nestjs/microservices';
import { type Observable } from 'rxjs';
import {
  EchoServiceController,
  StreamEchoRequest,
  StreamEchoResponse,
} from './interfaces/echo_service';

@Controller()
class AppController implements EchoServiceController {
  @GrpcMethod('EchoService', 'StreamEcho')
  streamEcho(request: StreamEchoRequest): Observable<StreamEchoResponse> {
    throw new Error('oopsies');
  }
}

export { AppController };
