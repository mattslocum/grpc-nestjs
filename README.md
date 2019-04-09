# grpc-nestjs

## Description
Uses GRPC with NestJS and Angular

## Installation

```bash
$ npm install
```

## Building Protos
```sh
protoc --plugin="protoc-gen-ts=./node_modules/.bin/protoc-gen-ts" --proto_path=protos counter.proto --js_out=import_style=commonjs:ui/protos --ts_out=service=true:ui/protos --grpc-web_out=import_style=commonjs,mode=grpcwebtext:protos
protoc --plugin="protoc-gen-ts=./node_modules/.bin/protoc-gen-ts" --proto_path=protos circles.proto --js_out=import_style=commonjs:ui/protos --ts_out=service=true:ui/protos --grpc-web_out=import_style=commonjs,mode=grpcwebtext:protos
protoc --plugin="protoc-gen-ts=./node_modules/.bin/protoc-gen-ts" --proto_path=protos counter.proto --js_out=import_style=commonjs:api/protos --ts_out=service=true:api/protos --grpc-web_out=import_style=commonjs,mode=grpcwebtext:protos 
protoc --plugin="protoc-gen-ts=./node_modules/.bin/protoc-gen-ts" --proto_path=protos circles.proto --js_out=import_style=commonjs:api/protos --ts_out=service=true:api/protos --grpc-web_out=import_style=commonjs,mode=grpcwebtext:protos 
```

## Running the app


## Test


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
