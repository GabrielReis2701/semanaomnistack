/**
 * Metodos HTTP:
 * 
 * GET: Buscas/Listar uma informação do back-end
 * POST: criar uma informação no back-end
 * PUT: Alterar uma informação no back-end
 * DELETE: deletar uma informação do back-end
 */

 /**
  * Tipos de Paramentros:
  * 
  * Query Params: Parametros nomeados enviados apos "?" (Filtro,paginação)
  * Route Params: Paramentros utilizados para identificar recursos 
  * Request Body: Corpo da requisição,utilizado para  criar ou alterar recursos
  */

  /**
   * SQL: MySQL,SQLite,PostgreSQL,Oracle, Miceosoft SQL Sever
   * NoSQL: MongoDB,CouchDB
   */

   /**
    * Driver: SELECT * FROM users
    * 
    * Query Builder: table('users').select('*').where()
    */
const express = require('express');
const routes = require('./routes');
const cors = require('cors');




const app = express();
app.use(express.json());
app.use(cors());
app.use(routes);






app.listen(3333);

