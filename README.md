# grpc-nestjs

## Description
Uses GRPC with NestJS

## Installation

```bash
$ npm install
```

## Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

```
grpcurl -plaintext -proto ./counter.proto -import-path ./protos 127.0.0.1:5000 counter.CounterService/Add
```

## Test

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```
