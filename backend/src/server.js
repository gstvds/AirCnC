const express = require("express");
const mongoose = require("mongoose");
const routes = require("./routes.js");
const cors = require("cors");
const path = require("path");

const socketio = require("socket.io");
const http = require("http");

const app = express();
const server = http.Server(app);
const io = socketio(server); // This const will store all users logged in app

const connectedUsers = {};

mongoose.connect(
  "mongodb+srv://omnistack9:omnistack@aircnc-yzol2.mongodb.net/semana09?retryWrites=true&w=majority",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true
  }
);

io.on("connection", socket => {
  console.log(socket.handshake.query);
  console.log("Usuário logado", socket.id);
  const { user_id } = socket.handshake.quer;

  connectedUsers[user_id] = socket.id;
});

app.use((req, res, next) => {
  req.io = io;
  req.connectedUsers = connectedUsers;

  return next();
});

// req.query = acessar os query params (para filtros)
// req.params = acessar route params (para edição, delete)
// req.body = acessar corpo da requisição (para criação, edição)

app.use(cors());
app.use(express.json()); // Indica para o express utilizar JSON
app.use("/files", express.static(path.resolve(__dirname, "..", "/uploads")));
app.use(routes); // Necessita vir depois do express.json, pois a requisição do json precisa ser feita antes

server.listen(3333);
