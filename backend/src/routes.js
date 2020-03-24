
const express = require('express');

const OngController = require('./controllers/OngController');
const IncidentController = require('./controllers/IncidentController');
const ProfileController = require('./controllers/ProfileController');
const SessionController = require('./controllers/SessionController');

const routes = express.Router();

routes.post('/sessions', SessionController.create);

 routes.get('/ongs', OngController.index);
 routes.post('/ongs', OngController.create);

 routes.get('/profile', ProfileController.index);

 routes.get('/incidents', IncidentController.index);
 routes.post('/incidents', IncidentController.create);
 routes.delete('/incidents/:id', IncidentController.delete);


 module.exports = routes;







    /* MÉTODOS HTTP:
        GET: Buscar/Listar uma informação do backend;
        POST: Criar uma informação no backend;
        PUT: Altera uma informação no backend;
        DELETE: Deletar uma informação no backend;
    */

/*
    *SQL: MYSQL, SQLITE, POSTGRESQL, ORACLE, MICROSOFT SQL SERVER;
    *NOSQL: MONGODB,COUCHDB, ETC; -> esquema da tabela "desorganizado";   
*/

/*
    *  Driver: SELECT * FROM users
    *  Query Builder: table('users').select('*').where()
*/
