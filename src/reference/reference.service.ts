import { HttpService } from '@nestjs/axios';
import { Injectable } from '@nestjs/common';
import { AxiosResponse } from 'axios';
import { Observable, map } from 'rxjs';
import { Reference } from './dto/reference.model';

@Injectable()
export class ReferenceService {
  constructor(private readonly httpService: HttpService) {}

  getReferenceTable(): Observable<Reference[]> {
    return this.httpService
      .post('ConsultarTabelaDeReferencia', {})
      .pipe(map((response: AxiosResponse<Reference[]>) => response.data));
  }
}
