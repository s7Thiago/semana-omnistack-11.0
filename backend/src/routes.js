const express = require('express');
const OngController = require('./controllers/OngController'); // Importando o controller das ongs
const IncidentController = require('./controllers/IncidentsController');
const ProfileController = require('./controllers/ProfileController'); //Importando o controller responsável por localizar as causas de uma ong específica
const SessionController = require('./controllers/SessionController');


const routes = express.Router();

// ?Rota responsável por criar uma sessão
routes.post('/sessions', SessionController.create);

// ? Grupo de rotas para ongs
routes.post('/ongs', OngController.create); // * Cria um aong
routes.get('/ongs', OngController.index); // * Lista as ongs cadastradas

// ? Grupo de rotas para casos
routes.post('/incidents', IncidentController.create); // * Cria um caso
routes.get('/incidents', IncidentController.index); // * Lista os casos cadastrados
routes.delete('/incidents/:id', IncidentController.delete) // ! Deleta um caso a partir do id recebido no route param da requisição

routes.get('/profile', ProfileController.index); // * Busca os casos de uma ong específica

module.exports = routes;