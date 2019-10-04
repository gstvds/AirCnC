const express = require("express");
const mongoose = require("mongoose");
const routes = require("./routes.js");
const cors = require("cors");
const path = require("path");

const app = express();

mongoose.connect(
  "mongodb+srv://omnistack9:omnistack@aircnc-yzol2.mongodb.net/semana09?retryWrites=true&w=majority",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true
  }
);

// req.query = acessar os query params (para filtros)
// req.params = acessar route params (para edição, delete)
// req.body = acessar corpo da requisição (para criação, edição)

app.use(cors());
app.use(express.json()); // Indica para o express utilizar JSON
app.use("/files", express.static(path.resolve(__dirname, "..", "/uploads")));
app.use(routes); // Necessita vir depois do express.json, pois a requisição do json precisa ser feita antes

app.listen(3333);
