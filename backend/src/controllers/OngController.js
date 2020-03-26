const crypto = require('crypto');
const connection = require('../database/connection'); // ? Importando a conexão com o banco de dados

module.exports = {

    // * Função assíncrona responsável por criar ongs
    // ! Esta função é assíncrona porque o insert pode demorar um pouco, então só o resultado da ong criada só
    // ! pode ser retornado quando esse isert tiver sido concluído
    async create(request, response) {

        const { name, email, whatsapp, city, uf } = request.body;

        // Gerando o id da ong com 4 bytes no formato hexadecimal
        const id = crypto.randomBytes(4).toString('HEX');

        // * Inserindo dados na tabela 'ongs'
        await connection('ongs').insert({
            id,
            name,
            email,
            whatsapp,
            city,
            uf,
        });

        // ! Quando o insert acima executar, a informação que nós vamos precisar retornar será o id da ong, pois ela vai
        // ! precisar dessa informação para se autenticar. O id vai funcionar como se fosse o 'CPF' da ong no nosso sistema
        return response.json({ id });
    },

    // * Função assíncrona responsável por listar as ongs
    async index(request, response) {
        // Selecionando todas as ongs do bancod e dados na tabela ongs
        const ongs = await connection('ongs').select('*');

        // Retornadno a lista de ongs
        return response.json(ongs);
    }
};