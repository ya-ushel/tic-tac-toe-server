const {
  addDoc,
  setDoc,
  getDoc,
  deleteDoc,
} = require("../../../shared/firebase");
const { GameModel } = require("../../models");

const {
  getUsersOnline,
  getUsersById,
} = require("../../../shared/firebase/users");

const registerGameHandlers = async (io, socket, userId) => {
  const playerTiped = async (data) => {
    console.log("playerTiped", data);
    io.emit("player.tiped", data);
  };

  socket.on("player.tip", playerTiped);
};

module.exports.registerGameHandlers = registerGameHandlers;
