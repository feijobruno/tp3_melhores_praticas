/**
 * @jest-environment ./src/infra/config/mongoose/mongoose-environment-jest
 */

import request from 'supertest';

import { app } from '../../../infra/config/app';

jest.setTimeout(10000000);

describe('ALUNO CONTROLLER', () => {
  it('deve ser possível criar um novo aluno', async () => {
    const response = await request(app).post('/alunos').send({
      nome: 'Rafael Brito',
      endereco: 'Rua Jornalista Mario Galvão, 348',
      numeroCelular: '+5521984941346',
      matricula: '175873',
      email: 'rafael.souzabrito7@gmail.com',
      cpf: '175.873.247-47',
    });

    console.log(response.body);

    expect(response.status).toBe(200);
    expect(response.body).toHaveProperty('_id');
  });

  it('não deve ser possível criar um aluno repetido', async () => {
    await request(app).post('/alunos').send({
      nome: 'Aluno Existente',
      endereco: 'Rua do Aluno Existente, 123',
      numeroCelular: '+5521999999999',
      matricula: '999999',
      email: 'aluno.existente@email.com',
      cpf: '999.999.999-99',
    });

    const response = await request(app).post('/alunos').send({
      nome: 'Aluno Existente',
      endereco: 'Rua do Aluno Existente, 123',
      numeroCelular: '+5521999999999',
      matricula: '999999',
      email: 'aluno.existente@email.com',
      cpf: '999.999.999-99',
    });

    console.log(response.body);

    expect(response.status).toBe(409);
    expect(response.body.message).toBe('Aluno existente!');
  });

  // it('should be able to find an existing user', async () => {
  //   const user = await request(app).post('/user').send({
  //     name: 'ExistingTest',
  //     address: 'Existing Test Avenue',
  //     phoneNumber: '+5521999999999',
  //     email: 'testexisting@test.com',
  //     password: 'ExistingTestSecret',
  //     cnpj: '99999999999',
  //     socialReason: 'Existing Test Company',
  //     type: userType.Contractor,
  //   });

  //   const response = await request(app).get('/user').send(user.body.id);

  //   expect(response.status).toBe(200);
  //   expect(response.body).toHaveProperty('_id');
  // });
});
