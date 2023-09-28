export class VehicleRequest {
  constructor(
    public codigoTabelaReferencia: number,
    public codigoTipoVeiculo: number,
    public codigoMarca: number,
    public codigoModelo: number,
    public codigoTipoCombustivel: number,
    public anoModelo: number,
    public tipoConsulta: string = 'tradicional',
  ) {}
}
