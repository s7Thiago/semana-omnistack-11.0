const knex = require('knex'); //Importando o knex
const configuration = require('../../knexfile'); //Importando o arquivo de configuração do knex da raiz do projeto

// ? Criando a conexão com o banco de dados utilizando o nex, e passando para ele a configuração de development
const connection = knex(configuration.development);

// ? Exportando a conexão com o banco de dados
module.exports = connection;