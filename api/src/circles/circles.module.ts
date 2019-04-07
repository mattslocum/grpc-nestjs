import { Module } from '@nestjs/common';
import {CirclesController} from "./circles.controller";

@Module({
  controllers: [CirclesController],
})
export class CirclesModule {}
