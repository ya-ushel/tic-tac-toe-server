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
    io.emit("player.tiped", { from: userId, to: data });
  };

  const playerJoined = async ({ id, gameId }) => {
    const game = await getDoc("games", gameId);
    const player = game.players.find((p) => p.id === id);
    const playerIds = game.players.map(({ id }) => id);

    player.status = "joined";

    const joinedPlayers = game.players.filter(
      ({ status }) => status === "joined"
    );

    await setDoc("games", game.id, game);

    if (game.settings.players === joinedPlayers.length) {
      game.state.status = "started";
      await setDoc("games", game.id, game);

      io.emit("game.started", { game });
    }

    io.emit("player.joined", { game });
  };

  const playerLeaved = async ({ id, gameId }) => {
    const game = await getDoc("games", gameId);
    const player = game.players.find((p) => p.id === id);

    const playerIds = game.players.map(({ id }) => id);

    player.status = "leaved";

    console.log("player:", player);
    await setDoc("games", game.id, game);
    io.emit("player.leaved", { game });

    // const users = await getUsersById(playerIds);

    // users.forEach((user) => {
    //   console.log("sent to", user.id);

    //   io.to(user.socketId).emit("player.leaved", { game });
    // });
  };

  const playerMoved = async ({ id, gameId, ceilIndex }) => {
    console.log("playerMoved", id, gameId, ceilIndex);
    const game = await getDoc("games", gameId);
    const player = game.players.find((p) => p.id === id);
    const currentPlayerId = game.state.currentPlayerId;

    if (currentPlayerId !== id) {
      return;
    }

    const getNextPlayerId = () => {
      const sortedFiltredPlayers = game.players
        .filter(({ status }) => status !== "left")
        .sort((a, b) => b.position - a.position);

      const currentPlayerIndex = sortedFiltredPlayers.findIndex(
        ({ id }) => currentPlayerId === id
      );

      const nextPlayerIndex =
        currentPlayerIndex + 1 >= sortedFiltredPlayers.length
          ? 0
          : currentPlayerIndex + 1;

      return sortedFiltredPlayers[nextPlayerIndex].id;
    };

    game.state.board.data[ceilIndex].value = player.shape;

    const nextPlayerId = getNextPlayerId();
    console.log("nextPlayerId", nextPlayerId);
    game.state.currentPlayerId = nextPlayerId;

    await setDoc("games", game.id, game);
    // console.log("game.updated", game);

    io.emit("game.updated", { game });
  };

  socket.on("player.tip", playerTiped);
  socket.on("player.join", playerJoined);
  socket.on("player.leave", playerLeaved);
  socket.on("player.make-move", playerMoved);
};

module.exports.registerGameHandlers = registerGameHandlers;
