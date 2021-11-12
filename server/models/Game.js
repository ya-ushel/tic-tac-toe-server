const { uid } = require("uid");
const { addDoc, setDoc, getDoc, deleteDoc } = require("../../shared/firebase");
const { Model } = require("./Model");
const { Player } = require("./Player");

const { GameStateModel } = require("./GameState");

class GameModel extends Model {
  constructor(props) {
    super(props);

    if (props.id) {
      return;
    }

    const id = uid();
    const state = new GameStateModel(props).get();
    const createdAt = new Date();

    this.add("id", id);
    this.add("state", state);
    this.add("createdAt", createdAt);
    this.add("lastMoveTime", Date.now());
  }

  addPlayers = async (ids, localGame = false, localPlayers) => {
    if (localGame) {
      this.addLocalPlayers(localPlayers);
      return;
    }

    const players = [];
    let index = 0;

    const setPlayer = async (id) => {
      const user = await getDoc("users", id);
      const player = new Player({
        ...user,
        position: index,
        local: false,
      }).get();

      players.push(player);
      index++;
    };

    const promises = ids.map(setPlayer);

    await Promise.all(promises);

    this.add("players", players);
  };

  addLocalPlayers = async (players) => {
    const playersArr = players.map((local, index) => {
      const player = new Player({
        ...local,
        position: index,
        local: true,
      }).get();

      return player;
    });

    this.add("players", playersArr);
  };

  getFreeCeils = () => {
    return this.state.board.data.filter((c) => !c.value);
  };

  calculateScore = (playerId, ceilIndex) => {
    const { data: gameBoard, size: boardSize } = this.state.board;
    const player = this.players.find((p) => p.id === playerId);

    let score = 0;
    const playerShape = player.shape;
    const board = gameBoard.map((c) => {
      if (c.value === player.shape) {
        c.matched = false;
      }
      return c;
    });
    const board2d = [];
    while (board.length) board2d.push(board.splice(0, boardSize));

    for (let i = 0; i < boardSize; i++) {
      let xMatched = 0;
      let yMatched = 0;
      let zMatched = 0;
      let aMatched = 0;
      let bMatched = 0;
      let cMatched = 0;

      let xPossibleMatchIndex = null;
      let xPossibleMatchCount = 0;
      let yPossibleMatchIndex = null;
      let yPossibleMatchCount = 0;
      let zPossibleMatchIndex = null;
      let zPossibleMatchCount = 0;
      let aPossibleMatchIndex = null;
      let aPossibleMatchCount = 0;
      let bPossibleMatchIndex = null;
      let bPossibleMatchCount = 0;
      let cPossibleMatchIndex = null;
      let cPossibleMatchCount = 0;

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

          if (xPossibleMatchCount === 2) {
            const possibleCeil = gameBoard[xPossibleMatchIndex];

            possibleCeil.possibleMatch = true;
            possibleCeil.possibleMatchColor = player.color;
          }
          xPossibleMatchCount = 1;
        } else {
          xMatchedCeils.length = 0;
          xMatched = 0;
        }

        if (xCeil.value === "" && xPossibleMatchCount === 2) {
          xPossibleMatchCount = 0;
        }

        if (xCeil.value === "" && xPossibleMatchCount === 1) {
          xPossibleMatchCount = 2;
          xPossibleMatchIndex = xCeil.index;
        }

        if (xMatched === 3) {
          score++;
          xMatched = 0;
          xMatchedCeils.forEach((c) => {
            gameBoard[c.index].matched = true;
          });
          xMatchedCeils.length = 0;
        }

        /// ----- y ------

        if (yCeil.value === playerShape || yCeil.index === ceilIndex) {
          yMatched++;
          yMatchedCeils.push(yCeil);

          if (yPossibleMatchCount === 2) {
            const possibleCeil = gameBoard[yPossibleMatchIndex];

            possibleCeil.possibleMatch = true;
            possibleCeil.possibleMatchColor = player.color;
          }
          yPossibleMatchCount = 1;
        } else {
          yMatchedCeils.length = 0;

          yMatched = 0;
        }

        if (yCeil.value === "" && yPossibleMatchCount === 2) {
          yPossibleMatchCount = 0;
        }

        if (yCeil.value === "" && yPossibleMatchCount === 1) {
          yPossibleMatchCount = 2;
          yPossibleMatchIndex = yCeil.index;
        }

        if (yMatched === 3) {
          score++;
          yMatched = 0;
          yMatchedCeils.forEach((c) => {
            gameBoard[c.index].matched = true;
          });
          yMatchedCeils.length = 0;
        }

        /// ----- z ------

        if (zCeil?.value === playerShape || zCeil?.index === ceilIndex) {
          zMatched++;
          zMatchedCeils.push(zCeil);

          if (zPossibleMatchCount === 2) {
            const possibleCeil = gameBoard[zPossibleMatchIndex];

            possibleCeil.possibleMatch = true;
            possibleCeil.possibleMatchColor = player.color;
          }
          zPossibleMatchCount = 1;
        } else {
          zMatchedCeils.length = 0;

          zMatched = 0;
        }

        if (zCeil?.value === "" && zPossibleMatchCount === 2) {
          zPossibleMatchCount = 0;
        }

        if (zCeil?.value === "" && zPossibleMatchCount === 1) {
          zPossibleMatchCount = 2;
          zPossibleMatchIndex = zCeil.index;
        }

        if (zMatched === 3) {
          score++;
          zMatched = 0;
          zMatchedCeils.forEach((c) => {
            gameBoard[c.index].matched = true;
          });
          zMatchedCeils.length = 0;
        }

        /// ----- a ------

        if (aCeil?.value === playerShape || aCeil?.index === ceilIndex) {
          aMatched++;
          aMatchedCeils.push(aCeil);

          if (aPossibleMatchCount === 2) {
            const possibleCeil = gameBoard[aPossibleMatchIndex];

            possibleCeil.possibleMatch = true;
            possibleCeil.possibleMatchColor = player.color;
          }
          aPossibleMatchCount = 1;
        } else {
          aMatchedCeils.length = 0;

          aMatched = 0;
        }

        if (aCeil?.value === "" && aPossibleMatchCount === 2) {
          aPossibleMatchCount = 0;
        }

        if (aCeil?.value === "" && aPossibleMatchCount === 1) {
          aPossibleMatchCount = 2;
          aPossibleMatchIndex = aCeil.index;
        }

        if (aMatched === 3) {
          score++;
          aMatched = 0;
          aMatchedCeils.forEach((c) => {
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

          if (bPossibleMatchCount === 2) {
            const possibleCeil = gameBoard[bPossibleMatchIndex];

            possibleCeil.possibleMatch = true;
            possibleCeil.possibleMatchColor = player.color;
          }
          bPossibleMatchCount = 1;
        } else {
          bMatchedCeils.length = 0;

          bMatched = 0;
        }

        if (bCeil?.value === "" && bPossibleMatchCount === 2) {
          bPossibleMatchCount = 0;
        }

        if (bCeil?.value === "" && bPossibleMatchCount === 1) {
          bPossibleMatchCount = 2;
          bPossibleMatchIndex = bCeil.index;
        }

        if (bMatched === 3) {
          score++;
          bMatched = 0;
          bMatchedCeils.forEach((c) => {
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
            gameBoard[c.index].matched = true;
          });

          cMatchedCeils.length = 0;
        }

        // xMatchedCeils.forEach((c) => {
        //
        //   gameBoard[c.index].matched = false;
        // });
      }
    }

    return score;
  };

  getNextPlayerId = () => {
    const sortedFiltredPlayers = this.players
      .filter(({ status }) => status !== "left")
      .sort((a, b) => a.position - b.position);

    const currentPlayerIndex = sortedFiltredPlayers.findIndex(
      ({ id }) => this.state.currentPlayerId === id
    );

    const nextPlayerIndex =
      currentPlayerIndex + 1 >= sortedFiltredPlayers.length
        ? 0
        : currentPlayerIndex + 1;

    return sortedFiltredPlayers[nextPlayerIndex].id;
  };

  calculateRating = (playerId) => {
    const { players } = this;
    const sortedPlayers = players.sort((a, b) => b.score - a.score);
    const playerIndex = sortedPlayers.findIndex((p) => p.id === playerId);
    const difference = 25;

    return playerIndex + 1 <= players.length / 2 ? difference : -difference;
  };

  finishGame = () => {
    this.state.status = "finished";

    if (!this.settings.localGame) {
      this.players.forEach((player) => {
        player.oldRating = player.rating;
        player.rating = player.rating + this.calculateRating(player.id);
      });
    }
  };
}

module.exports = { GameModel };
