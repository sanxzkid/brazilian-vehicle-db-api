import { Controller, Get } from '@nestjs/common';
import { ReferenceService } from './reference.service';

@Controller()
export class ReferenceController {
  constructor(private readonly referenceService: ReferenceService) {}

  @Get()
  getHello() {
    return this.referenceService.getReferenceTable();
  }
}
