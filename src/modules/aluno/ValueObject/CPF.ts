import { mask } from '../../../utils/cpfMask';

export class CPF {
  private _valor: string;

  constructor(valor: string) {
    this.valor = valor;
  }

  get valor(): string {
    return this._valor;
  }

  set valor(valor: string) {
    this._valor = valor;
  }

}
