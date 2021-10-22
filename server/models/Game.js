const { GameStateModel } = require("./GameState");

class GameModel {
  settings = {};
  players = [];
  hostId = null;
  state = {};

  constructor(props) {
    const { settings, players, hostId } = props;

    this.settings = settings;
    this.hostId = hostId;
    this.players = players;
    this.state = new GameStateModel(props).get();
  }

  get() {
    return {
      settings: this.settings,
      players: this.players,
      hostId: this.hostId,
      state: this.state,
    };
  }
}

module.exports = { GameModel };
