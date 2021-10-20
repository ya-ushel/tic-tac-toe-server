const { addDoc, setDoc, getDoc } = require("../../shared/firebase");
const { defaultGameOptions } = require("../../shared/config");

module.exports = {
  createLobby: async function (req, res) {
    try {
      const options = req.query.options || defaultGameOptions;
      const name = req.query.name || "Default room name";
      const hostId = req.query.hostId;
      const playerList = [hostId];

      if (!hostId) {
        res.send("error");
        return;
      }

      const newLobby = {
        name,
        hostId,
        playerList,
        options,
      };

      await addDoc("lobbies", newLobby);
      res.json(newLobby);
    } catch (error) {
      console.log("createLobby error", req, error);
    }
  },
  joinLobby: async function (req, res) {
    try {
      const userId = req.query.userId;
      const lobbyId = req.query.lobbyId;

      if (!userId) {
        res.send("error");
        return;
      }

      if (!lobbyId) {
        res.send("error");
        return;
      }
      const lobby = await getDoc("lobbies", lobbyId);
      lobby.playerList.push(userId);

      const newLobby = await setDoc("lobbies", lobbyId, lobby);
      res.json(newLobby);
    } catch (error) {
      console.log("joinLobby error", req, error);
    }
  },
  leaveLobby: async function (req, res) {
    try {
      const userId = req.query.userId;
      const lobbyId = req.query.lobbyId;

      if (!userId) {
        res.send("error");
        return;
      }

      if (!lobbyId) {
        res.send("error");
        return;
      }
      const lobby = await getDoc("lobbies", lobbyId);
      const playerList = lobby.playerList.filter((p) => p !== userId);
      lobby.playerList = playerList;
      console.log(playerList);

      const newLobby = await setDoc("lobbies", lobbyId, lobby);
    } catch (error) {
      console.log("leaveLobby error", req, error);
    }
  },
};
