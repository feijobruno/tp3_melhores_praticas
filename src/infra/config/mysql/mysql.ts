import { Sequelize } from 'sequelize'
import 'dotenv/config';

const dbConnection = new Sequelize(process.env.DB_NAME as string, process.env.DB_USER as string, process.env.DB_PASS as string,  {
  host: process.env.DB_HOST as string,
  dialect: 'mysql'
});

dbConnection.authenticate()
.then(function(){
    console.log("Conexão com o banco de dados realizada com sucesso!");
}).catch(function(){
    console.log("Erro: Conexão com o banco de dados não realizada com sucesso!");
});

export { dbConnection };
