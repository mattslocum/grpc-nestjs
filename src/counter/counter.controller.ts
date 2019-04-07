import {Controller, OnModuleInit} from '@nestjs/common';
import { Client, ClientGrpc, GrpcMethod } from '@nestjs/microservices';
import { grpcClientOptions } from '../grpc-client.options';
import {Observable, Subject} from "rxjs";

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

  private count$ = new Subject<ICount>();

  private counterService: CounterService;

  private count = 0;

  onModuleInit() {
    this.counterService = this.client.getService<CounterService>('CounterService');
  }

  @GrpcMethod('CounterService')
  add(): ICount {
    const val = { count: ++this.count };
    this.count$.next(val);
    return val;
  }

  @GrpcMethod('CounterService')
  subtract(): ICount {
    const val = { count: --this.count };
    this.count$.next(val);
    return val;
  }

  @GrpcMethod('CounterService')
  listen(): Observable<ICount> {
    return this.count$.asObservable();
  }
}
