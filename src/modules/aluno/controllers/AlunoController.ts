import { Request, Response } from 'express';

import { DuplicatedEntityError } from '../../../errors/DuplicatedEntityError';
import { IAlunoService } from '../services/IAlunoService';
import { CPF } from '../ValueObject/CPF';

export class AlunoController {
  private alunoService: IAlunoService;

  constructor(alunoService: IAlunoService) {
    this.alunoService = alunoService;
  }

  async recebeNovoAluno(request: Request, response: Response) {
    try {
      const { name, email, password, cpf } =
        request.body;

      const aluno = await this.alunoService.cria({
        name,
        email,
        password,
        cpf: new CPF(cpf),
      });

      return response.json(aluno);
    } catch (error) {
      if (error instanceof DuplicatedEntityError)
        return response.status(error.statusCode).json({
          name: error.name,
          message: error.message,
          statusCode: error.statusCode,
        });

      return response.status(500).json({ error });
    }
  }
}
