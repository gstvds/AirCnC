const express = require("express");

const routes = express.Router();

routes.post("/users", (req, res) => {
  return res.json(req.body);
});

module.exports = routes; // Exporta as rotas para que o servidor entenda
