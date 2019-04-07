// package: counter
// file: counter.proto

import * as counter_pb from "./counter_pb";
import {grpc} from "@improbable-eng/grpc-web";

type CounterServiceAdd = {
  readonly methodName: string;
  readonly service: typeof CounterService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof counter_pb.Empty;
  readonly responseType: typeof counter_pb.CountResponse;
};

type CounterServiceSubtract = {
  readonly methodName: string;
  readonly service: typeof CounterService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof counter_pb.Empty;
  readonly responseType: typeof counter_pb.CountResponse;
};

type CounterServiceListen = {
  readonly methodName: string;
  readonly service: typeof CounterService;
  readonly requestStream: false;
  readonly responseStream: true;
  readonly requestType: typeof counter_pb.Empty;
  readonly responseType: typeof counter_pb.CountResponse;
};

export class CounterService {
  static readonly serviceName: string;
  static readonly Add: CounterServiceAdd;
  static readonly Subtract: CounterServiceSubtract;
  static readonly Listen: CounterServiceListen;
}

export type ServiceError = { message: string, code: number; metadata: grpc.Metadata }
export type Status = { details: string, code: number; metadata: grpc.Metadata }

interface UnaryResponse {
  cancel(): void;
}
interface ResponseStream<T> {
  cancel(): void;
  on(type: 'data', handler: (message: T) => void): ResponseStream<T>;
  on(type: 'end', handler: () => void): ResponseStream<T>;
  on(type: 'status', handler: (status: Status) => void): ResponseStream<T>;
}
interface RequestStream<T> {
  write(message: T): RequestStream<T>;
  end(): void;
  cancel(): void;
  on(type: 'end', handler: () => void): RequestStream<T>;
  on(type: 'status', handler: (status: Status) => void): RequestStream<T>;
}
interface BidirectionalStream<ReqT, ResT> {
  write(message: ReqT): BidirectionalStream<ReqT, ResT>;
  end(): void;
  cancel(): void;
  on(type: 'data', handler: (message: ResT) => void): BidirectionalStream<ReqT, ResT>;
  on(type: 'end', handler: () => void): BidirectionalStream<ReqT, ResT>;
  on(type: 'status', handler: (status: Status) => void): BidirectionalStream<ReqT, ResT>;
}

export class CounterServiceClient {
  readonly serviceHost: string;

  constructor(serviceHost: string, options?: grpc.RpcOptions);
  add(
    requestMessage: counter_pb.Empty,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: counter_pb.CountResponse|null) => void
  ): UnaryResponse;
  add(
    requestMessage: counter_pb.Empty,
    callback: (error: ServiceError|null, responseMessage: counter_pb.CountResponse|null) => void
  ): UnaryResponse;
  subtract(
    requestMessage: counter_pb.Empty,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: counter_pb.CountResponse|null) => void
  ): UnaryResponse;
  subtract(
    requestMessage: counter_pb.Empty,
    callback: (error: ServiceError|null, responseMessage: counter_pb.CountResponse|null) => void
  ): UnaryResponse;
  listen(requestMessage: counter_pb.Empty, metadata?: grpc.Metadata): ResponseStream<counter_pb.CountResponse>;
}

