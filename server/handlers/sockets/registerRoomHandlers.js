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

  const userLeft = async ({ gameId, roomId }) => {
    console.log("userLeft", roomId);

    const room = await getDoc("rooms", roomId);

    if (!room && gameId) {
      const game = await getDoc("games", room.gameId);
      if (game) {
        await deleteDoc("games", game.id);
      }
    }

    if (room?.gameId) {
      const game = await getDoc("games", room.gameId);
      const players = game.players.map((p) => {
        if (p.id === userId) {
          p.status = "left";
        }

        return p;
      });

      const activePlayers = players.filter(
        (p) => p.status !== "left" && !p.local
      );

      game.players = players;

      if (!activePlayers.length) {
        await deleteDoc("games", game.id);
      } else {
        await setDoc("games", game.id, game);
      }
    }

    io.emit("room.user-left");
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

    if (room.options.players > room.users.length && !room.options.localGame) {
      return;
    }

    if (room.hostId !== userId) {
      res.send("error");
      return;
    }

    const gameProps = {
      settings: room.options,
      hostId: room.hostId,
    };

    const userModel = await getDoc("users", userId);
    const userCopy = { ...userModel, localPlayers: null };

    const game = new GameModel(gameProps);
    const userIds = room.users.map(({ id }) => id);

    await game.addPlayers(userIds, room.options.localGame, [
      userCopy,
      ...room.options.localPlayers,
    ]);

    const gameModel = game.get();

    room.status = "started";
    room.gameId = gameModel.id;

    await setDoc("rooms", roomId, room);
    await setDoc("games", gameModel.id, gameModel);

    if (!room.options.localGame) {
      const users = await getUsersById(userIds);

      users.forEach((user) => {
        console.log("sent to", user.id);

        io.to(user.socketId).emit("room.started", gameModel.id);
      });
    } else {
      io.to(socket.id).emit("room.started", gameModel.id);
    }
  };

  socket.on("room.created", roomCreated);
  socket.on("room.user-join", userJoined);
  socket.on("room.leave", userLeft);
  socket.on("room.start-game", startGame);
};

module.exports.registerRoomHandlers = registerRoomHandlers;
