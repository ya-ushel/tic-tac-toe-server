const http = require("http");
const bodyParser = require("body-parser");

const express = require("express");
const app = express();
const path = require("path");
const cors = require("cors");

const port = process.env.PORT || 8080;
const server = http.Server(app).listen(port);

const { initSockets } = require("./handlers/sockets");
const { initFirebase } = require("../shared/firebase");

const {
  createLobby,
  joinLobby,
  leaveLobby,
  getRooms,
  startGame,
} = require("./routes");

const corsOptions = {
  origin: "*",
  credentials: true, //access-control-allow-credentials:true
  optionSuccessStatus: 200,
};

app.use(express.static(path.join(__dirname, "../client/dist")));
app.use(express.static(__dirname + "/../node_modules/"));

app.use(cors(corsOptions)); // Use this after the variable declaration

app.use(bodyParser.json()); // to support JSON-encoded bodies
app.use(
  bodyParser.urlencoded({
    // to support URL-encoded bodies
    extended: true,
  })
);

initSockets(server);
initFirebase();

app.get("/", (req, res) => {
  res.sendFile("index.html", { root: __dirname + "/../client/dist" });

  // res.sendFile("/client/dist/index.html", { root: parentDirname });
});

app.post("/rooms/create", createLobby);
app.post("/rooms/join", joinLobby);
app.post("/rooms/leave", leaveLobby);
app.get("/rooms/list", getRooms);
app.get("/rooms/start", startGame);
// app.get("/users/list", getUsers);

// server.listen(port, () => console.log(`Listening on port ${port}`));
