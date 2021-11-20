import { io } from "socket.io-client";
import store from "../store";

let socket = null;

let id = localStorage.getItem("id");

const initSockets = async () => {
  return new Promise((res, rej) => {
    console.log("initSockets");

    socket = io("https://tic-tac-toe-1337.herokuapp.com/", {
      secure: true,
      transports: ["websocket"],
      auth: { userId: id },
    });

    socket.on("connect_error", (err) => {
      res();
      console.log("connect_error", err, err.message);
    });

    socket.on("connect", () => {
      console.log("connect!", socket);
      res();
    });
  });
};

export { socket, initSockets };
