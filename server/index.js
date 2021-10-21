const http = require("http");
const express = require("express");
const app = express();
const path = require("path");

const port = process.env.PORT || 8080;
const server = http.Server(app).listen(port);
const { startLobbies } = require("./handlers/lobby");
const { initFirebase } = require("../shared/firebase");

const { createLobby, joinLobby, leaveLobby, getRooms } = require("./routes");

app.use(express.static(path.join(__dirname, "../client/dist")));
app.use(express.static(__dirname + "/../node_modules/"));

startLobbies(server);
initFirebase();

app.get("/", (req, res) => {
  res.sendFile("index.html", { root: __dirname + "/../client/dist" });

  // res.sendFile("/client/dist/index.html", { root: parentDirname });
});

app.get("/rooms/create", createLobby);
app.get("/rooms/join", joinLobby);
app.get("/rooms/leave", leaveLobby);
app.get("/rooms/list", getRooms);
