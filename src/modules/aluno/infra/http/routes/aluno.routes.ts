import { Router, Request, Response } from 'express';

import { AlunoFactory } from '../../../factory/AlunoFactory';

const alunoFactory = new AlunoFactory();

const alunoRouter = Router();

alunoRouter.post('/', async (request: Request, response: Response) => {
  await (
    await alunoFactory.lidaComNovoAluno()
  ).recebeNovoAluno(request, response);
});

alunoRouter.get('/', async (request: Request, response: Response) => {
  await (
    await alunoFactory.lidaComNovoAluno()
  ).recebeNovoAluno(request, response);
});

export { alunoRouter };
