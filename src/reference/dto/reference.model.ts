import { Expose } from 'class-transformer';

export class Reference {
  @Expose({ name: 'Codigo' })
  code: number;
  @Expose({ name: 'Mes' })
  month: string;
}
