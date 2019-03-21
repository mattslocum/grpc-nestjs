import { Module } from '@nestjs/common';
import { HeroModule } from './hero/hero.module';
import {CounterModule} from "./counter/counter.module";

@Module({
  imports: [CounterModule],
})
export class ApplicationModule {}
