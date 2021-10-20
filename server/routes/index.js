const { addDoc } = require("../../shared/firebase");
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
};
