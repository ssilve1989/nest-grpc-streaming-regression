# gRPC Streaming Errors

Install the things

`pnpm install`

Run the server

`pnpm start:server`

run the client

`pnpm start:client`

Observe crash from server

```
> nest-grpc-errors@0.0.1 start:server /Users/steve/dev/nest-grpc-errors
> ts-node src/main.ts

[Nest] 15871  - 03/26/2024, 1:29:59 PM     LOG [NestFactory] Starting Nest application...
[Nest] 15871  - 03/26/2024, 1:29:59 PM     LOG [InstanceLoader] AppModule dependencies initialized +4ms
[Nest] 15871  - 03/26/2024, 1:29:59 PM     LOG [NestMicroservice] Nest microservice successfully started +23ms
Echo Service started on localhost:5000
[Nest] 15871  - 03/26/2024, 1:30:13 PM   ERROR [RpcExceptionsHandler] oopsies
Error: oopsies
    at AppController.streamEcho (/Users/steve/dev/nest-grpc-errors/src/app.controller.ts:14:11)
    at /Users/steve/dev/nest-grpc-errors/node_modules/.pnpm/@nestjs+microservices@10.3.5_@grpc+grpc-js@1.10.3_@nestjs+common@10.3.5_@nestjs+core@10.3.5_r_ztdakranbrwzcbtnrhche34ccy/node_modules/@nestjs/microservices/context/rpc-context-creator.js:44:33
    at processTicksAndRejections (node:internal/process/task_queues:95:5)
    at async /Users/steve/dev/nest-grpc-errors/node_modules/.pnpm/@nestjs+microservices@10.3.5_@grpc+grpc-js@1.10.3_@nestjs+common@10.3.5_@nestjs+core@10.3.5_r_ztdakranbrwzcbtnrhche34ccy/node_modules/@nestjs/microservices/context/rpc-proxy.js:11:32
    at async Object.StreamEcho (/Users/steve/dev/nest-grpc-errors/node_modules/.pnpm/@nestjs+microservices@10.3.5_@grpc+grpc-js@1.10.3_@nestjs+common@10.3.5_@nestjs+core@10.3.5_r_ztdakranbrwzcbtnrhche34ccy/node_modules/@nestjs/microservices/server/server-grpc.js:158:56)
[UnhandledPromiseRejection: This error originated either by throwing inside of an async function without a catch block, or by rejecting a promise which was not handled with .catch(). The promise rejected with the reason "#<Object>".] {
  code: 'ERR_UNHANDLED_REJECTION'
}
 ELIFECYCLE  Command failed with exit code 1.
```
