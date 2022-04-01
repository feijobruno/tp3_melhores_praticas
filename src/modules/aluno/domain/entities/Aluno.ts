import { CPF } from '../../ValueObject/CPF';

export class Aluno {
  public _nome: string;
  public _endereco: string;
  public _numeroCelular: string;
  public _matricula: string;
  public _email: string;
  public _cpf: CPF;

  constructor(
    nome: string,
    endereco: string,
    numeroCelular: string,
    matricula: string,
    email: string,
    cpf: CPF,
  ) {
    this._nome = nome;
    this._endereco = endereco;
    this._numeroCelular = numeroCelular;
    this._matricula = matricula;
    this._email = email;
    this._cpf = cpf;
  }
}
