import express, { request } from "express";
import routes from './routes';

const app = express();

app.use(express.json());
app.use(routes);

// Rota: Endereço completo da aplicação
// Recursos: Qual entidade estamos acessando do sistema

// GET: Buscar uma ou mais informaçãoes do back-end
// POST: Criar uma nova informação no back-end 
// PUT: Atualizar uma informação existente no back-end
// DELETE: Remover uma informação do back-end

// Request Param: Parametros que vem na propria rota que identificam um recurso
// Query Param: Parametros que vem na propria rota geralmente opcionais para filtros, paginação
// Request body : Parametros para criação/atualização de informações


app.listen(3333);

