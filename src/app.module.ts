import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ReferenceService } from './reference/reference.service';
import { ReferenceService } from './service/reference/reference.service';

@Module({
  imports: [],
  controllers: [AppController],
  providers: [AppService, ReferenceService],
})
export class AppModule {}
