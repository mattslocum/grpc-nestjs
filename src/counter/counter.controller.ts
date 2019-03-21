import { Controller, OnModuleInit } from '@nestjs/common';
import { Client, ClientGrpc, GrpcMethod } from '@nestjs/microservices';
import { grpcClientOptions } from '../grpc-client.options';

interface CounterService {
  add(): number;
  subtract(): number;
}

interface ICount {
  count: number;
}

@Controller()
export class CounterController implements OnModuleInit {
  @Client(grpcClientOptions)
  private readonly client: ClientGrpc;

  private counterService: CounterService;

  private count = 0;

  onModuleInit() {
    this.counterService = this.client.getService<CounterService>('CounterService');
  }

  @GrpcMethod('CounterService')
  add(): ICount {
    return { count: ++this.count };
  }

  @GrpcMethod('CounterService')
  subtract(): ICount {
    return { count: --this.count };
  }
}
