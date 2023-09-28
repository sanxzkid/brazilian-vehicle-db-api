import { HttpService } from '@nestjs/axios';
import { Injectable, Logger } from '@nestjs/common';
import { AxiosResponse } from 'axios';
import { Observable, map } from 'rxjs';
import { Generic } from './models/generic';
import { Reference } from './models/reference';
import { BrandsRequest } from './dto/request/brands.request';
import { ModelsResponse } from './dto/response/models.response';
import { VehicleResponse } from './dto/response/vehicle.response';
import { ModelsRequest } from './dto/request/models.request';
import { YearsRequest } from './dto/request/years.request';
import { VehicleRequest } from './dto/request/vehicle.request';

@Injectable()
export class FipeService {
  constructor(private readonly httpService: HttpService) {}

  private readonly logger = new Logger(FipeService.name);

  getReferences(): Observable<Reference[]> {
    return this.httpService
      .post('ConsultarTabelaDeReferencia', {})
      .pipe(map((response: AxiosResponse<Reference[]>) => response.data));
  }

  getBrands(request: BrandsRequest): Observable<Generic[]> {
    return this.httpService
      .post('ConsultarMarcas', request)
      .pipe(map((response: AxiosResponse<Generic[]>) => response.data));
  }

  getModels(request: ModelsRequest): Observable<ModelsResponse> {
    return this.httpService
      .post('ConsultarModelos', request)
      .pipe(map((response: AxiosResponse<ModelsResponse>) => response.data));
  }

  getYearsAndFuel(request: YearsRequest): Observable<Generic[]> {
    return this.httpService
      .post('ConsultarAnoModelo', request)
      .pipe(map((response: AxiosResponse<Generic[]>) => response.data));
  }

  getVehicle(request: VehicleRequest): Observable<VehicleResponse> {
    return this.httpService
      .post('ConsultarValorComTodosParametros', request)
      .pipe(map((response: AxiosResponse<VehicleResponse>) => response.data));
  }

  async runJob() {
    const refs = await this.getReferences().toPromise();
    const brands = await this.getBrands(
      new BrandsRequest(refs![0].Codigo, 1),
    ).toPromise();

    for (const brand of brands!) {
      const models = await this.getModels(
        new ModelsRequest(refs![0].Codigo, 1, +brand.Value),
      ).toPromise();
      for (const model of models!.Modelos) {
        const years = await this.getYearsAndFuel(
          new YearsRequest(refs![0].Codigo, 1, +brand.Value, +model.Value),
        ).toPromise();
        for (const year of years!) {
          const vehicle = await this.getVehicle(
            new VehicleRequest(
              refs![0].Codigo,
              1,
              +brand.Value,
              +model.Value,
              +year.Value.split('-')[1],
              +year.Value.split('-')[0],
            ),
          ).toPromise();
          this.logger.debug('vehicle', JSON.stringify(vehicle));
        }
      }
    }
  }
}
