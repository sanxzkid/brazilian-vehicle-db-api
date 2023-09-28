import { Controller, Get, Logger } from '@nestjs/common';
import { FipeService } from './fipe.service';
import { BrandsRequest } from './dto/request/brands.request';
import { ModelsRequest } from './dto/request/models.request';
import { YearsRequest } from './dto/request/years.request';
import { VehicleRequest } from './dto/request/vehicle.request';

@Controller('fipe')
export class FipeController {
  constructor(private readonly fipeService: FipeService) {}

  private readonly logger = new Logger(FipeController.name);

  @Get('references')
  getReferences() {
    return this.fipeService.getReferences();
  }

  @Get('brands')
  getBrands() {
    return this.fipeService.getBrands(new BrandsRequest(301, 1));
  }

  @Get('models')
  getModels() {
    return this.fipeService.getModels(new ModelsRequest(301, 1, 21));
  }

  @Get('years')
  getYears() {
    return this.fipeService.getYearsAndFuel(new YearsRequest(301, 1, 21, 652));
  }

  @Get('vehicle')
  getVehicle() {
    return this.fipeService.getVehicle(
      new VehicleRequest(301, 1, 21, 652, 2, 1999),
    );
  }

  @Get('job')
  async runJob() {
    return this.fipeService.runJob();
  }
}
