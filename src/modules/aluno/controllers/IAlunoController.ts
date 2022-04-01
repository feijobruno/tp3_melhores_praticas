import { Response } from 'express';

interface IAlunoController {
  recebeNovoAluno(request: Request, response: Response): Response<string, any>;
}

export { IAlunoController };
