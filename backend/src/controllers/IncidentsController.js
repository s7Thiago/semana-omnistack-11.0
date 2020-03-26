const connection = require('../database/connection');

module.exports = {
    async create(request, response) {
        const { title, description, value } = request.body;

        // ! A informação da ong que vamos receber do banco de dados será enviada através de um campo específico no 'header' da requisição
        // ! nele é onde geralmente estão contidas informações relativas ao contexto da requiseção. nesse caso,  id da ong que criará o caso/incidente
        // ! virá especificado no campo authorization do header da requisição
        const ong_id = request.headers.authorization;

        // * Inserindo dados na tabela de incidentes
        const [id] = await connection('incidents').insert({
            title,
            description,
            value,
            ong_id,
        });

        return response.json({ id });

    },

    async index(request, response) {
        // Aqui vamos limitar a exibição de casos para que não sejam exibidos todos de uma vez
        const { page = 1 } = request.query;

        const [contagem] = await connection('incidents').count();// Contagem do número de casos
        console.log(contagem);

        // ! Enviando a contagem de registros para o header da resposta da nossa requisição
        //  Geralmente quando fazemos paginação de dados, essa informação é retornada no header da resposta da requisição
        // E costuma ser no campo X-Total-Count que geralmente armazena o total de registros. Estamos pegando o campo
        // count(*) que vem através do objeto contagem, ele nos fornecerá a contagem de todos os campos
        response.header('X-Total-Count', contagem['count(*)']);

        const casos = await connection('incidents')
            .join('ongs', 'ongs.id', '=', 'incidents.ong_id') // ? trazendo os dados da tabela de ongs, apenas onde o id da ong corresponder ao id da ong no caso
            .limit(5) // Limita o número de itens por página
            .offset((page - 1) * 5) //Limita o número de itens por página
            // ! Alguns campos da tabela incidents que tinham os mesmos nomes que na tabela ongs estavam sendo sobrepostos
            // ! pelos dados da tabela ongs. Aqui, especificamos que queremos TODOS os campos da tabela incidents, e especificamos
            // ! quais campos queremos da tabela de ongs
            .select([
                'incidents.*',
                'ongs.name',
                'ongs.email',
                'ongs.whatsapp',
                'ongs.city',
                'ongs.uf',
            ]);
        return response.json(casos);
    },

    async delete(request, response) {

        // ! Vamos precisar pegar o id do caso/inidente através dos route params
        const { id } = request.params;

        // ! Vamos precisar também do id da ong
        /**
         * Vamos precisar do id da ong para confirmar se a ong que está apagando o caso realmente é a 
         * mesma que criou. Não podemos permitir que uma ong apague casos de outras ongs
         */
        const ong_id = request.headers.authorization;

        // ? Selecionando o incidente
        const incident = await connection('incidents')
            .where('id', id) // Aqui estamos buscando o incidente específico onde o id é igual ao id do route params
            .select('ong_id') // Depois vamos selecionar apenas a coluna ong_id
            .first(); //Sabemos que o id do route params corresponde a apenas um único registro, entam especificamos que queremos o primeiro que for encontrado

        console.log('Caso recebido: ' + incident);

        if (incident.ong_id !== ong_id) {
            return response.status(401).json({ error: 'Operation not permited' }); //Retorna não autorizado caso o ong_id não corresponda
        }

        // Se der tudo certo e o ong_id da ong que vai deletar for o mesmo da que criou o caso, seguimos com a exclusão
        await connection('incidents').where('id', id).delete();

        //Quando vamos retornar uma resposta ao front-end que não posui conteúdo, retornamos o status 204
        return response.status(204).send();  //A essa altura, temos uma resposta que deu sucesso, mas não possui conteúdo para retornar
    }
};