const { addDoc, setDoc, getDoc, deleteDoc } = require("../../shared/firebase");

module.exports = {
  getGame: async function (req, res) {
    try {
      const { gameId } = req.query;
      console.log(req.query);
      if (!gameId) {
        res.send("error: gameId undefined");
        return;
      }

      const room = await getDoc("games", gameId);

      res.json(room);
    } catch (error) {
      console.log("createLobby error", req, error);
      res.json(error);
    }
  },
};
