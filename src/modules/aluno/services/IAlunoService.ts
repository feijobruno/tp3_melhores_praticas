import { IAluno } from '../../../types/IAluno';
import { CPF } from '../ValueObject/CPF';

interface IAlunoRequestDTO {
  name: string;
  email: string;
  password: string;
  cpf: CPF;
}

interface IAlunoService {
  cria({
    name,
    email,
    password,
    cpf,
  }: IAlunoRequestDTO): Promise<IAluno>;
}

export { IAlunoRequestDTO, IAlunoService };
