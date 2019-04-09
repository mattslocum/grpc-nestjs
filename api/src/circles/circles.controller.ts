import {Controller, OnModuleInit} from '@nestjs/common';
import { Client, ClientGrpc, GrpcMethod } from '@nestjs/microservices';
import { grpcClientOptions } from '../grpc-client.options';
import {Observable, Subject} from "rxjs";
import {CircleData} from "../../../protos/circles_pb";
import {CirclesService} from "../../../protos/circles_pb_service";

@Controller()
export class CirclesController implements OnModuleInit {
  @Client(grpcClientOptions)
  private readonly client: ClientGrpc;

  private dataSubject = new Subject<CircleData>();

  private service: CirclesService;

  onModuleInit() {
    this.service = this.client.getService<CirclesService>('CirclesService');
  }

  @GrpcMethod('CirclesService')
  add(circle: CircleData): void {
    this.dataSubject.next(circle);
  }

  @GrpcMethod('CirclesService')
  listen(): Observable<CircleData> {
    return this.dataSubject.asObservable();
  }
}
