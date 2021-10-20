const http = require("http");
const express = require("express");
const app = express();
const fs = require("fs");
const parentDirname = require("path").resolve(__dirname, "..");

const server = http.Server(app).listen(8080);
const { startLobbies } = require("./handlers/lobby");
const { initFirebase } = require("../shared/firebase");

const { createLobby } = require("./routes");
console.log(parentDirname);
app.use(express.static(__dirname + "/../client/"));
app.use(express.static(__dirname + "/../node_modules/"));

startLobbies(server);
initFirebase();

app.get("/", (req, res) => {
  // res.sendFile("index.html", { root: __dirname + "/../client" });

  res.sendFile("/client/dist/index.html", { root: parentDirname });
});

app.get("/create-lobby", createLobby);
