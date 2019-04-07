import {Controller, OnModuleInit} from '@nestjs/common';
import { Client, ClientGrpc, GrpcMethod } from '@nestjs/microservices';
import { grpcClientOptions } from '../grpc-client.options';
import {Observable, Subject} from "rxjs";

interface CirclesService {
  add(): number;
  subtract(): number;
}

interface ICircleData {
  x: number;
  y: number;
  color: number;
}

@Controller()
export class CirclesController implements OnModuleInit {
  @Client(grpcClientOptions)
  private readonly client: ClientGrpc;

  private dataSubject = new Subject<ICircleData>();

  private service: CirclesService;

  onModuleInit() {
    this.service = this.client.getService<CirclesService>('CirclesService');
  }

  @GrpcMethod('CirclesService')
  add(circle: ICircleData): void {
    this.dataSubject.next(circle);
  }

  @GrpcMethod('CirclesService')
  listen(): Observable<ICircleData> {
    return this.dataSubject.asObservable();
  }
}
