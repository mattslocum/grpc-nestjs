import { Module } from '@nestjs/common';
import { HeroModule } from './hero/hero.module';
import {CounterModule} from "./counter/counter.module";
import {CirclesModule} from "./circles/circles.module";

@Module({
  imports: [
    // CounterModule,
    CirclesModule
  ],
})
export class ApplicationModule {}
