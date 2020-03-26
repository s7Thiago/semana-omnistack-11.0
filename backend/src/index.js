const express = require('express');
const routes = require('./routes'); // Módulo de segurança responsável por definir quem poderá acessar a api
const cors = require('cors');

const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);


app.listen(3333);
