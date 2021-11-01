const { uid } = require("uid");
const { Model } = require("./Model");
const { GameStateModel } = require("./GameState");

class GameModel extends Model {
  constructor(props) {
    super(props);

    const id = uid();
    const state = new GameStateModel(props).get();

    this.add("id", id);
    this.add("state", state);
  }
}

module.exports = { GameModel };
