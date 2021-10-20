const http = require("http");
const express = require("express");
const app = express();
const fs = require("fs");

const server = http.Server(app).listen(8080);
const { startLobbies } = require("./handlers/lobby");
const { initFirebase } = require("../shared/firebase");

const { createLobby } = require("./routes");
console.log(createLobby);
app.use(express.static(__dirname + "/../client/"));
app.use(express.static(__dirname + "/../node_modules/"));

startLobbies(server);
initFirebase();

app.get("/", (req, res) => {
  // res.sendFile("index.html", { root: __dirname + "/../client" });
  const stream = fs.createReadStream(__dirname + "/../client/index.html");
  stream.pipe(res.query);
});

app.get("/create-lobby", createLobby);
