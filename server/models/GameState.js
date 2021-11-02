const { Model } = require("./Model");
const { Board } = require("./Board");

class GameStateModel extends Model {
  constructor(props) {
    super(props);

    const board = new Board().get();

    this.status = "created";
    this.currentPlayerId = props.hostId;
    this.board = board;

    this.add("board", this.board);
    this.add("status", this.status);
    this.add("currentPlayerId", this.currentPlayerId);
  }
}

module.exports = { GameStateModel };
