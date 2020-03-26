const connection = require('../database/connection');

module.exports = {
    async index(request, response) {
        // Pegando o header que contém o id da ong quando esta função for chamada em alguma requisição
        const ong_id = request.headers.authorization;

        // ?Buscando os incidentes específicos de uma ong
        const incidents = await connection('incidents')
            .where('ong_id', ong_id)
            .select('*');

        return response.json(incidents);

    }
};