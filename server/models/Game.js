const { uid } = require("uid");
const { Model } = require("./Model");
const { GameStateModel } = require("./GameState");

class GameModel extends Model {
  settings = {};
  players = [];
  hostId = null;
  state = {};

  constructor(props) {
    super(props);

    const id = uid();
    const state = new GameStateModel(props).get();

    this.addField("id", id);
    this.addField("state", state);
  }
}

module.exports = { GameModel };
