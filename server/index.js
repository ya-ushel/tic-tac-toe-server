const http = require("http");
const express = require("express");
const app = express();
const path = require("path");

const server = http.Server(app).listen(8080);
const { startLobbies } = require("./handlers/lobby");
const { initFirebase } = require("../shared/firebase");

const { createLobby, joinLobby, leaveLobby } = require("./routes");

app.use(express.static(path.join(__dirname, "../client/dist")));
app.use(express.static(__dirname + "/../node_modules/"));

startLobbies(server);
initFirebase();

app.get("/", (req, res) => {
  res.sendFile("index.html", { root: __dirname + "/../client/dist" });

  // res.sendFile("/client/dist/index.html", { root: parentDirname });
});

app.get("/create-lobby", createLobby);
app.get("/join-lobby", joinLobby);
app.get("/leave-lobby", leaveLobby);
