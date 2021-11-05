const { Model } = require("./Model");
const { Board } = require("./Board");

class GameStateModel extends Model {
  constructor(props) {
    super(props);

    const board = new Board({ size: props.settings.boardSize }).get();

    this.turn = 0;
    this.round = 0;
    this.status = props.settings.localGame ? "started" : "created";
    this.currentPlayerId = props.hostId;
    this.board = board;

    this.add("turn", this.turn);
    this.add("round", this.round);
    this.add("board", this.board);
    this.add("status", this.status);
    this.add("currentPlayerId", this.currentPlayerId);
  }
}

module.exports = { GameStateModel };
