import { ClientOptions, Transport } from '@nestjs/microservices';
import { join } from 'path';

export const grpcClientOptions: ClientOptions = {
  transport: Transport.GRPC,
  options: {
    url: '0.0.0.0:5000',
    package: 'circles',
    protoPath: join(__dirname, '../protos/all.proto'),
    // protoPath: '/hero.proto',
    // loader: {
    //   keepCase: true,
    //   longs: Number,
    //   defaults: false,
    //   arrays: true,
    //   objects: true,
    //   includeDirs: [join(__dirname, '../protos')]
    // }
  },
};
