const socketIo = require("socket.io");

const { registerUserHandlers } = require("./registerUserHandlers");

const initSockets = (server) => {
  const io = socketIo(server, {
    upgradeTimeout: 30000,
    rejectUnauthorized: false,
  });

  io.on("connection", async (socket) => {
    const { userId } = socket.handshake?.auth;
    console.log("a user connected", userId);

    registerUserHandlers(io, socket, userId);

    socket.on("message", () => {
      console.log("user.joined message");
    });
    socket.on("user.joined", () => {
      console.log("user.joined");
    });
  });
};

module.exports = { registerUserHandlers, initSockets };
