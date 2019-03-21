import { NestFactory } from '@nestjs/core';
import { ApplicationModule } from './app.module';
import { grpcClientOptions } from './grpc-client.options';

async function bootstrap() {
  /**
   * Hybrid application (HTTP + GRPC)
   */

  // grpcurl -plaintext -proto ./counter.proto -import-path ./protos 127.0.0.1:5000 counter.CounterService/Add

  const app = await NestFactory.create(ApplicationModule);
  app.connectMicroservice(grpcClientOptions);
  await app.startAllMicroservicesAsync();
  await app.listen(3000);
}

bootstrap();
