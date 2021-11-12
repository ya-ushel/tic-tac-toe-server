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
  const playerTiped = async ({ gameId, playerId }) => {
    io.to(`game-${gameId}`).emit("player.tiped", {
      from: userId,
      to: playerId,
    });
  };

  const playerJoined = async ({ id, gameId }) => {
    socket.join(`game-${gameId}`);

    const game = await getDoc("games", gameId);
    const player = game.players.find((p) => p.id === id);
    const playerIds = game.players.map(({ id }) => id);

    player.status = "joined";

    const joinedPlayers = game.players.filter(
      ({ status }) => status === "joined"
    );

    await setDoc("games", game.id, game);

    if (
      game.settings.players === joinedPlayers.length &&
      game.state.status !== "finished"
    ) {
      game.state.status = "started";
      await setDoc("games", game.id, game);

      io.to(`game-${gameId}`).emit("game.started", { game });
    }

    io.to(`game-${gameId}`).emit("player.joined", { game });
  };

  const playerLeaved = async ({ id, gameId }) => {
    const game = await getDoc("games", gameId);
    const player = game.players.find((p) => p.id === userId);

    const playerIds = game.players.map(({ id }) => id);

    player.status = "leaved";

    console.log("player: game game", game);
    await setDoc("games", game.id, game);
    io.to(`game-${gameId}`).emit("player.leaved", { game });

    // const users = await getUsersById(playerIds);

    // users.forEach((user) => {
    //   console.log("sent to", user.id);

    //   io.to(user.socketId).emit("player.leaved", { game });
    // });
  };

  const playerMoved = async ({ id, gameId, ceilIndex }) => {
    console.log("playerMoved", id, gameId, ceilIndex);
    const game = await getDoc("games", gameId);
    const { data: gameBoard, size: boardSize } = game.state.board;
    const player = game.players.find((p) => p.id === id);
    const currentPlayerId = game.settings.localGame
      ? id
      : game.state.currentPlayerId;

    if (currentPlayerId !== id && !game.settings.localGame) {
      return;
    }

    gameBoard[ceilIndex].value = player.shape;
    gameBoard[ceilIndex].turn = game.state.turn;

    const gameModel = new GameModel(game);
    const freeCeils = gameModel.getFreeCeils();

    player.score = gameModel.calculateScore(player.id, ceilIndex);
    player.spentTime = player.spentTime + Date.now() - game.lastMoveTime;

    const nextPlayerId = gameModel.getNextPlayerId();

    game.state.currentPlayerId = nextPlayerId;
    game.state.turn = game.state.turn + 1;
    game.state.round = parseInt(game.state.turn / game.settings.players);
    game.state.status = !freeCeils.length ? "finished" : game.state.status;
    game.lastMoveTime = Date.now();

    await setDoc("games", game.id, game);
    // console.log("game.updated", game);

    io.to(`game-${gameId}`).emit("game.updated", { game });
  };

  const playerUndoMove = async ({ id, gameId }) => {
    const game = await getDoc("games", gameId);
    const { data: gameBoard, size: boardSize } = game.state.board;
    const player = game.players.find((p) => p.id === id);
    const currentPlayerId = game.settings.localGame
      ? id
      : game.state.currentPlayerId;

    if (currentPlayerId !== id && !game.settings.localGame) {
      return;
    }

    if (game.state.turn <= 1) {
      return;
    }

    const getPrevPlayerId = () => {
      const sortedFiltredPlayers = game.players
        .filter(({ status }) => status !== "left")
        .sort((a, b) => a.position - b.position);

      const currentPlayerIndex = sortedFiltredPlayers.findIndex(
        ({ id }) => currentPlayerId === id
      );

      const prevPlayerIndex =
        currentPlayerIndex === 0
          ? sortedFiltredPlayers.length - 1
          : currentPlayerIndex - 1;

      console.log("prevPlayerIndex", prevPlayerIndex, sortedFiltredPlayers);
      return sortedFiltredPlayers[prevPlayerIndex].id;
    };

    game.state.turn = game.state.turn - 1;

    const ceil = gameBoard.find(({ turn }) => turn === game.state.turn);
    const prevPlayerId = getPrevPlayerId();
    const prevPlayer = game.players.find((p) => p.id === prevPlayerId);

    ceil.value = "";
    ceil.matched = false;
    game.state.currentPlayerId = prevPlayerId;

    const gameModel = new GameModel(game);

    prevPlayer.score = gameModel.calculateScore(prevPlayer.id, null);

    await setDoc("games", game.id, game);
    io.to(`game-${gameId}`).emit("game.updated", { game });
  };

  socket.on("player.tip", playerTiped);
  socket.on("player.join", playerJoined);
  socket.on("player.leave", playerLeaved);
  socket.on("player.make-move", playerMoved);
  socket.on("player.undo-move", playerUndoMove);
};

module.exports.registerGameHandlers = registerGameHandlers;
