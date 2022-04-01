import { Sequelize, Model, DataTypes, Optional } from 'sequelize'
// import { Sequelize, Model, DataTypes, Optional } from '@sequelize/core';
import { dbConnection } from '../../../../infra/config/mysql/mysql';
import { IAluno } from '../../../../types/IAluno';

interface AlunoCreationAttributes extends Optional<IAluno, "id"> {};
interface AlunoInstance extends Model<IAluno, AlunoCreationAttributes>, IAluno {};

export const AlunoSchema = dbConnection.define<AlunoInstance>('aluno', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false
    },
    cpf: {
        type: DataTypes.STRING,
        allowNull: false,
    }
});

//Criar a tabela
//AlunoSchema.sync();
//Verificar se há alguma diferença na tabela, realiza a alteração
//User.sync({ alter: true });


