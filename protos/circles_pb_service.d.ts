// package: circles
// file: circles.proto

import * as circles_pb from "./circles_pb";
import {grpc} from "@improbable-eng/grpc-web";

type CirclesServiceAdd = {
  readonly methodName: string;
  readonly service: typeof CirclesService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof circles_pb.CircleData;
  readonly responseType: typeof circles_pb.Empty;
};

type CirclesServiceListen = {
  readonly methodName: string;
  readonly service: typeof CirclesService;
  readonly requestStream: false;
  readonly responseStream: true;
  readonly requestType: typeof circles_pb.Empty;
  readonly responseType: typeof circles_pb.CircleData;
};

export class CirclesService {
  static readonly serviceName: string;
  static readonly Add: CirclesServiceAdd;
  static readonly Listen: CirclesServiceListen;
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

export class CirclesServiceClient {
  readonly serviceHost: string;

  constructor(serviceHost: string, options?: grpc.RpcOptions);
  add(
    requestMessage: circles_pb.CircleData,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: circles_pb.Empty|null) => void
  ): UnaryResponse;
  add(
    requestMessage: circles_pb.CircleData,
    callback: (error: ServiceError|null, responseMessage: circles_pb.Empty|null) => void
  ): UnaryResponse;
  listen(requestMessage: circles_pb.Empty, metadata?: grpc.Metadata): ResponseStream<circles_pb.CircleData>;
}

