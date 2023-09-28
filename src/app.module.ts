import { Module } from '@nestjs/common';
import { ScheduleModule } from '@nestjs/schedule';
import { FipeModule } from './fipe/fipe.module';

@Module({
  imports: [ScheduleModule.forRoot(), FipeModule],
})
export class AppModule {}
