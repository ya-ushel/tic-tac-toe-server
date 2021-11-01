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

const registerRoomHandlers = async (io, socket, userId) => {
  const userJoined = async (data) => {
    console.log("userJoined", data);
    io.emit("room.user-joined", data);
  };

  const roomCreated = async (data) => {
    console.log("roomCreated", data);
    io.emit("room.created", data);
  };

  const userLeft = async (data) => {
    console.log("userLeft", data);
    io.emit("room.user-left", data);
  };

  const startGame = async (data) => {
    const { roomId } = data;

    if (!roomId) {
      return;
    }

    const room = await getDoc("rooms", roomId);

    if (!room) {
      return;
    }

    if (room.options.players > room.playerList.length) {
      return;
    }

    if (room.hostId !== userId) {
      res.send("error");
      return;
    }

    const gameProps = {
      settings: room.options,
      players: room.playerList,
      hostId: room.hostId,
    };
    const game = new GameModel(gameProps);
    const gameModel = game.get();

    room.status = "started";
    room.gameId = gameModel.id;

    await setDoc("rooms", roomId, room);

    await setDoc("games", gameModel.id, gameModel);

    const users = await getUsersById(gameModel.players);

    users.forEach((user) => {
      console.log("sent to", user.id);

      io.to(user.socketId).emit("room.started", gameModel.id);
    });
  };

  socket.on("room.created", roomCreated);
  socket.on("room.user-join", userJoined);
  socket.on("room.leave", userLeft);
  socket.on("room.start-game", startGame);
};

module.exports.registerRoomHandlers = registerRoomHandlers;
