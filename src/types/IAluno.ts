import { CPF } from '../modules/aluno/ValueObject/CPF';

export interface IAluno {
  id: number;
  name: string;
  email: string;
  password: string;
  cpf: string;
}
