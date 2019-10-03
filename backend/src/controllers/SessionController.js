const User = require("../models/User.js");
// Métodos disponíveis dentro de um controller:
// Index = retorna uma listagem de sessões, Show = listar uma única sessão
// Store = criar uma nova sessão, Update = alterar uma sessão
// Destroy = remover/deletar uma sessão

module.exports = {
  async store(req, res) {
    const { email } = req.body;

    const user = await User.create({ email });

    return res.json(user);
  }
};
