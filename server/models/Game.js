const { uid } = require("uid");
const { addDoc, setDoc, getDoc, deleteDoc } = require("../../shared/firebase");
const { Model } = require("./Model");
const { Player } = require("./Player");

const { GameStateModel } = require("./GameState");

class GameModel extends Model {
  constructor(props) {
    super(props);

    const id = uid();
    const state = new GameStateModel(props).get();

    this.add("id", id);
    this.add("state", state);
  }

  addPlayers = async (ids) => {
    const players = [];

    ids.forEach(async (id, index) => {
      const user = await getDoc("users", id);
      const player = new Player({ ...user, position: index }).get();

      players.push(player);
    });

    this.add("players", players);
  };
}

module.exports = { GameModel };
