import { IAluno } from '../../../types/IAluno';

interface IAlunoRequestDTO {
  name: string;
  email: string;
  password: string;
  cpf: string;
}

interface IAlunoRepository {
  armazena(aluno: IAlunoRequestDTO): Promise<IAluno>;
  encontraTodos(): Promise<IAluno[]>;
  encontraUm(id: string): Promise<IAluno | null>;
  encontraPorEmail(email: string): Promise<IAluno | null>;
  encontraPorCPF(cpf: string): Promise<IAluno | null>;
  remove(id: string): Promise<boolean>;
}

export { IAlunoRepository };
