const { Model } = require("./Model");

class GameStateModel extends Model {
  status = null;
  board = {};
  currentPlayerId = null;

  constructor(props) {
    super(props);

    this.status = "created";
    this.currentPlayerId = props.hostId;

    this.add("status", this.status);
    this.add("currentPlayerId", this.currentPlayerId);
  }
}

module.exports = { GameStateModel };
