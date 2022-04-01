import { Router } from 'express';

import { alunoRouter } from '../../../modules/aluno/infra/http/routes/aluno.routes';

const routes = Router();

routes.use('/alunos', alunoRouter);

// todas as rotas são relacionadas nesse arquivo.

export { routes };
