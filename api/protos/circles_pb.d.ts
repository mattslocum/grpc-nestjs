// package: circles
// file: circles.proto

import * as jspb from "google-protobuf";

export class Empty extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Empty.AsObject;
  static toObject(includeInstance: boolean, msg: Empty): Empty.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Empty, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Empty;
  static deserializeBinaryFromReader(message: Empty, reader: jspb.BinaryReader): Empty;
}

export namespace Empty {
  export type AsObject = {
  }
}

export class CircleData extends jspb.Message {
  getX(): number;
  setX(value: number): void;

  getY(): number;
  setY(value: number): void;

  getColor(): number;
  setColor(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CircleData.AsObject;
  static toObject(includeInstance: boolean, msg: CircleData): CircleData.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CircleData, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CircleData;
  static deserializeBinaryFromReader(message: CircleData, reader: jspb.BinaryReader): CircleData;
}

export namespace CircleData {
  export type AsObject = {
    x: number,
    y: number,
    color: number,
  }
}

