const express = require("express");
const routes = require("./routes.js");

const app = express();

// req.query = acessar os query params (para filtros)
// req.params = acessar route params (para edição, delete)
// req.body = acessar corpo da requisição (para criação, edição)

app.use(express.json()); // Indica para o express utilizar JSON
app.use(routes); // Necessita vir depois do express.json, pois a requisição do json precisa ser feita antes

app.listen(3333);
