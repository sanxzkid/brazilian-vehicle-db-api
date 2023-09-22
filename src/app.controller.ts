import { Controller, Get } from '@nestjs/common';
import { ReferenceService } from './reference/reference.service';

@Controller()
export class AppController {
  constructor(private readonly appService: ReferenceService) {}

  @Get()
  getHello() {
    return this.appService.getReferenceTable();
  }
}
