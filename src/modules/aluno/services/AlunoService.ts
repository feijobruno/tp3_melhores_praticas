import { DuplicatedEntityError } from '../../../errors/DuplicatedEntityError';
import { IAlunoRepository } from '../repos/IAlunoRepository';
import { IAlunoRequestDTO, IAlunoService } from './IAlunoService';

export class AlunoService implements IAlunoService {
  private alunoRepository: IAlunoRepository;

  constructor(alunoRepository: IAlunoRepository) {
    this.alunoRepository = alunoRepository;
  }

  async cria({
    name,
    email,
    password,
    cpf,
  }: IAlunoRequestDTO) {

    const verificaEmailDuplicado = await this.alunoRepository.encontraPorEmail(email);
    const verificaCPFDuplicado = await this.alunoRepository.encontraPorCPF(cpf.valor);
 
    if (verificaEmailDuplicado || verificaCPFDuplicado){
      throw new DuplicatedEntityError('Aluno existente!');
    }
    
    const aluno = await this.alunoRepository.armazena({name, email, password, cpf: cpf.valor});

    return aluno;
  }
}
