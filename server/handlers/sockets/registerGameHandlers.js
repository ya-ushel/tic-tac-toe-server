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

const calculateScore = (gameBoard, boardSize, shape, ceilIndex) => {
  console.log("calculateScore", shape);
  let score = 0;
  const playerShape = shape;
  const board = [...gameBoard];
  const board2d = [];
  while (board.length) board2d.push(board.splice(0, boardSize));

  for (let i = 0; i < boardSize; i++) {
    let xMatched = 0;
    let yMatched = 0;
    let zMatched = 0;
    let aMatched = 0;
    let bMatched = 0;
    let cMatched = 0;

    const xMatchedCeils = []; // ->
    const yMatchedCeils = []; // |
    const zMatchedCeils = []; // \
    const aMatchedCeils = []; // /
    const bMatchedCeils = [];
    const cMatchedCeils = [];

    for (let j = 0; j < boardSize; j++) {
      const lastIndex = boardSize - 1;
      const currentIndex = i + j + 1;
      const iter = currentIndex > lastIndex ? lastIndex : currentIndex;

      const xCeil = board2d[i][j];
      const yCeil = board2d[j][i];

      const zCeil = board2d[j][j + i];
      const bCeil = board2d[iter][j];

      const aCeil = board2d[boardSize - j - 1][j - i];
      const cCeil = board2d[iter][boardSize - j - 1];

      /// ----- x ------

      if (xCeil.value === playerShape || xCeil.index === ceilIndex) {
        xMatched++;
        xMatchedCeils.push(xCeil);
      } else {
        xMatchedCeils.length = 0;
        xMatched = 0;
      }

      if (xMatched === 3) {
        score++;
        xMatched = 0;
        xMatchedCeils.forEach((c) => {
          console.log("matchedCeils", c);
          gameBoard[c.index].matched = true;
        });
        xMatchedCeils.length = 0;
      }

      /// ----- y ------

      if (yCeil.value === playerShape || yCeil.index === ceilIndex) {
        yMatched++;
        yMatchedCeils.push(yCeil);
      } else {
        yMatchedCeils.length = 0;

        yMatched = 0;
      }

      if (yMatched === 3) {
        score++;
        yMatched = 0;
        yMatchedCeils.forEach((c) => {
          console.log("matchedCeils", c);
          gameBoard[c.index].matched = true;
        });
        yMatchedCeils.length = 0;
      }

      /// ----- z ------

      if (zCeil?.value === playerShape || zCeil?.index === ceilIndex) {
        zMatched++;
        zMatchedCeils.push(zCeil);
      } else {
        zMatchedCeils.length = 0;

        zMatched = 0;
      }

      if (zMatched === 3) {
        score++;
        zMatched = 0;
        zMatchedCeils.forEach((c) => {
          console.log("matchedCeils", c);
          gameBoard[c.index].matched = true;
        });
        zMatchedCeils.length = 0;
      }

      /// ----- a ------

      if (aCeil?.value === playerShape || aCeil?.index === ceilIndex) {
        aMatched++;
        aMatchedCeils.push(aCeil);
      } else {
        aMatchedCeils.length = 0;

        aMatched = 0;
      }

      if (aMatched === 3) {
        score++;
        aMatched = 0;
        aMatchedCeils.forEach((c) => {
          console.log("matchedCeils", c);
          gameBoard[c.index].matched = true;
        });
        aMatchedCeils.length = 0;
      }

      /// ----- b ------

      if (
        (bCeil?.value === playerShape || bCeil?.index === ceilIndex) &&
        currentIndex <= lastIndex
      ) {
        bMatched++;
        bMatchedCeils.push(bCeil);
      } else {
        bMatchedCeils.length = 0;

        bMatched = 0;
      }

      if (bMatched === 3) {
        score++;
        bMatched = 0;
        bMatchedCeils.forEach((c) => {
          console.log("matchedCeils", c);
          gameBoard[c.index].matched = true;
        });
        bMatchedCeils.length = 0;
      }

      /// ----- c ------

      if (
        (cCeil?.value === playerShape || cCeil?.index === ceilIndex) &&
        currentIndex <= lastIndex
      ) {
        cMatched++;
        gameBoard[cCeil.index].matchedCount = cMatched;
        cMatchedCeils.push(cCeil);
      } else {
        cMatchedCeils.length = 0;

        cMatched = 0;
      }

      if (cMatched === 3) {
        score++;
        cMatched = 0;
        cMatchedCeils.forEach((c) => {
          console.log("matchedCeils", c);
          gameBoard[c.index].matched = true;
        });

        cMatchedCeils.length = 0;
      }

      // xMatchedCeils.forEach((c) => {
      //   console.log("matchedCeils", c);
      //   gameBoard[c.index].matched = false;
      // });
    }
  }

  return score;
};

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
    const player = game.players.find((p) => p.id === userId);

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
    const { data: gameBoard, size: boardSize } = game.state.board;
    const player = game.players.find((p) => p.id === id);
    const currentPlayerId = game.settings.localGame
      ? id
      : game.state.currentPlayerId;

    if (currentPlayerId !== id && !game.settings.localGame) {
      return;
    }

    const getNextPlayerId = () => {
      const sortedFiltredPlayers = game.players
        .filter(({ status }) => status !== "left")
        .sort((a, b) => a.position - b.position);

      const currentPlayerIndex = sortedFiltredPlayers.findIndex(
        ({ id }) => currentPlayerId === id
      );

      const nextPlayerIndex =
        currentPlayerIndex + 1 >= sortedFiltredPlayers.length
          ? 0
          : currentPlayerIndex + 1;

      return sortedFiltredPlayers[nextPlayerIndex].id;
    };

    gameBoard[ceilIndex].value = player.shape;
    gameBoard[ceilIndex].turn = game.state.turn;

    player.score = calculateScore(
      gameBoard,
      boardSize,
      player.shape,
      ceilIndex
    );
    console.log("calculateScore score", player.score);

    const nextPlayerId = getNextPlayerId();
    console.log("nextPlayerId", nextPlayerId);
    game.state.currentPlayerId = nextPlayerId;
    game.state.turn = game.state.turn + 1;

    await setDoc("games", game.id, game);
    // console.log("game.updated", game);

    io.emit("game.updated", { game });
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
    console.log("game.state.turn game.state.turn ", game.state.turn);
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
    game.state.currentPlayerId = prevPlayerId;
    prevPlayer.score = calculateScore(
      gameBoard,
      boardSize,
      prevPlayer.shape,
      null
    );

    await setDoc("games", game.id, game);
    io.emit("game.updated", { game });
  };

  socket.on("player.tip", playerTiped);
  socket.on("player.join", playerJoined);
  socket.on("player.leave", playerLeaved);
  socket.on("player.make-move", playerMoved);
  socket.on("player.undo-move", playerUndoMove);
};

module.exports.registerGameHandlers = registerGameHandlers;
