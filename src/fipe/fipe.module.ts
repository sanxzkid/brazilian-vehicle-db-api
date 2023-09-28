import { Module } from '@nestjs/common';
import { FipeService } from './fipe.service';
import { HttpModule } from '@nestjs/axios';
import { CronJobService } from './cron-job.service';
import { FipeController } from './fipe.controller';

@Module({
  imports: [
    HttpModule.register({
      timeout: 5000,
      baseURL: 'https://veiculos.fipe.org.br/api/veiculos/',
    }),
  ],
  providers: [CronJobService, FipeService],
  controllers: [FipeController],
})
export class FipeModule {}
