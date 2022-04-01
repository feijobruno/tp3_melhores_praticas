import { IAluno } from '../../../types/IAluno';
import { AlunoSchema } from '../infra/models/AlunoSchema';
import { IAlunoRepository } from './IAlunoRepository';

interface IAlunoRequestDTO {
  name: string;
  email: string;
  password: string;
  cpf: string;
}

class AlunoRepository implements IAlunoRepository {

  async armazena(aluno: IAlunoRequestDTO): Promise<IAluno> {
    console.log(aluno);
    const novoAluno = await AlunoSchema.create(aluno);
    return novoAluno;
  }

  async remove(id: string): Promise<boolean> {
    await AlunoSchema.findByPk(id);

    return true;
  }

  async encontraTodos(): Promise<IAluno[]> {
    const alunos = await AlunoSchema.findAll();

    return alunos;
  }

  async encontraUm(id: string): Promise<IAluno | null> {
    const aluno = await AlunoSchema.findOne({ where: { id } });

    return aluno;
  }

  async encontraPorEmail(email: string): Promise<IAluno | null> {
    const aluno = await AlunoSchema.findOne({ where: { email } });

    return aluno;
  }

  async encontraPorCPF(cpf: string): Promise<IAluno | null> {
    const aluno = await AlunoSchema.findOne({ where: { cpf } });

    return aluno;
  }
}

export { AlunoRepository };
