class GameStateModel {
  status = null;
  board = {};
  currentPlayerId = null;

  constructor(props) {
    this.status = "created";
    this.currentPlayerId = props.hostId;
  }

  get() {
    return {
      status: this.status,
      board: this.board,
      currentPlayerId: this.currentPlayerId,
    };
  }
}

module.exports = { GameStateModel };
