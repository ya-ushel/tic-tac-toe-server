const socketIo = require("socket.io");

const { registerUserHandlers } = require("./registerUserHandlers");
const { registerRoomHandlers } = require("./registerRoomHandlers");
const { registerGameHandlers } = require("./registerGameHandlers");

const initSockets = (server) => {
  const io = socketIo(server, {
    upgradeTimeout: 30000,
    rejectUnauthorized: false,
  });

  io.on("connection", async (socket) => {
    const { userId } = socket.handshake?.auth;
    console.log("a user connected", userId);

    registerUserHandlers(io, socket, userId);
    registerRoomHandlers(io, socket, userId);
    registerGameHandlers(io, socket, userId);
  });
};

module.exports = { registerUserHandlers, initSockets };
