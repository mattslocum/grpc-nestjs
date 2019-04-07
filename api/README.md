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

## Build
### project setup
```
oc new-project matt
```
### api
```
docker build -t nexus.spotxchange.com/dev/grpc-api:0.1 .
docker push nexus.spotxchange.com/dev/grpc-api:0.1
oc run grpc-api --image=nexus.spotxchange.com/dev/grpc-api:0.1
oc expose dc grpc-api --port=5000
oc expose svc/grpc-api --hostname=grpc-api.lod.spotx.tv
```
### envoy
```
docker build -t nexus.spotxchange.com/dev/envoy:0.1 .
docker push nexus.spotxchange.com/dev/envoy:0.1

```