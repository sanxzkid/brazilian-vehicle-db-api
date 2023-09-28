import { Injectable, Logger } from '@nestjs/common';
import { Cron, CronExpression } from '@nestjs/schedule';
import { FipeService } from './fipe.service';

@Injectable()
export class CronJobService {
  constructor(private readonly fipeService: FipeService) {}

  private readonly logger = new Logger(CronJobService.name);

  @Cron(CronExpression.EVERY_1ST_DAY_OF_MONTH_AT_MIDNIGHT)
  async handleCron() {
    try {
      this.fipeService.runJob();
    } catch (error) {
      this.logger.error('Error fetching data:', error.message);
    }
  }
}
