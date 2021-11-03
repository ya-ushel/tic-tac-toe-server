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

  addPlayers = async (ids, localPlayers) => {
    if (localPlayers.length) {
      this.addLocalPlayers(localPlayers);
      return;
    }

    const players = [];
    let index = 0;

    const setPlayer = async (id) => {
      console.log("add player", id);
      const user = await getDoc("users", id);
      const player = new Player({
        ...user,
        position: index,
        local: false,
      }).get();
      console.log("add player player", player);
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
      console.log("player.player.player", player);
      return player;
    });

    this.add("players", playersArr);
  };
}

module.exports = { GameModel };
