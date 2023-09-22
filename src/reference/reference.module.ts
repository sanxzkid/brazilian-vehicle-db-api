import { Module } from '@nestjs/common';
import { ReferenceService } from './reference.service';
import { HttpModule } from '@nestjs/axios';
import { ReferenceController } from './reference.controller';

@Module({
  imports: [
    HttpModule.register({
      timeout: 5000,
      baseURL: 'https://veiculos.fipe.org.br/api/veiculos/',
    }),
  ],
  providers: [ReferenceService],
  controllers: [ReferenceController],
})
export class ReferenceModule {}
