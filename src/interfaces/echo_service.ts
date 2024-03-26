import type { Observable } from 'rxjs';
import type { Metadata } from '@grpc/grpc-js';

export interface StreamEchoRequest {
  message?: string;
  repeat?: number;
}

export interface StreamEchoResponse {}

export interface EchoServiceClient {
  streamEcho(request: StreamEchoRequest): Observable<StreamEchoResponse>;
}

export interface EchoServiceController {
  streamEcho(
    request: StreamEchoRequest,
    metadata: Metadata,
  ): Observable<StreamEchoResponse>;
}
