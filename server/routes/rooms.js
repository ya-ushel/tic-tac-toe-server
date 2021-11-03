const { addDoc, setDoc, getDoc, deleteDoc } = require("../../shared/firebase");
const { getAllRooms } = require("../../shared/firebase/rooms");
const { getAllUsers } = require("../../shared/firebase/users");
const { defaultGameOptions } = require("../../shared/config");
const { GameModel } = require("../models");

module.exports = {
  createLobby: async function (req, res) {
    try {
      const { options = defaultGameOptions, name = "Default room name" } =
        req.body;

      console.log("createLobby options, name", options, name);
      const hostId = req.get("userId");
      const host = await getDoc("users", hostId);
      const users = [host];

      if (!hostId) {
        res.send("error: userId undefined");
        return;
      }

      const newLobby = {
        status: "created",
        name,
        hostId,
        users,
        options,
      };

      const id = await addDoc("rooms", newLobby);

      newLobby.id = id;

      await setDoc("rooms", id, newLobby);
      res.json(newLobby);
    } catch (error) {
      console.log("createLobby error", req, error);
      res.json(error);
    }
  },
  joinLobby: async function (req, res) {
    try {
      const userId = req.get("userId");
      const { roomId } = req.body;

      if (!userId) {
        res.send("error: userId undefined");
        return;
      }

      if (!roomId) {
        res.send("error: roomId undefined");
        return;
      }
      const room = await getDoc("rooms", roomId);
      const user = await getDoc("users", userId);

      room.users.push(user);

      const newLobby = await setDoc("rooms", roomId, room);
      res.json(newLobby);
    } catch (error) {
      console.log("joinLobby error", req, error);
      res.json(error);
    }
  },
  leaveLobby: async function (req, res) {
    try {
      const userId = req.get("userId");
      const { roomId } = req.body;

      if (!userId) {
        res.send("error: userId undefined");
        return;
      }

      if (!roomId) {
        res.send("error: roomId undefined");
        return;
      }
      const room = await getDoc("rooms", roomId);

      if (room.users.length === 1) {
        await deleteDoc("rooms", roomId);
        res.send("deleted");
        return;
      }

      if (userId === room.hostId) {
        room.hostId = room.users[0];
      }

      const users = room.users.filter((p) => p.id !== userId);
      room.users = users;
      console.log(users);

      const newLobby = await setDoc("rooms", roomId, room);
      res.json(newLobby);
    } catch (error) {
      console.log("leaveLobby error", req, error);
      res.json(error);
    }
  },
  getRooms: async function (req, res) {
    try {
      const rooms = await getAllRooms();

      res.json(rooms);
    } catch (err) {
      console.log(err);
      res.json(error);
    }
  },
  getUsers: async function (req, res) {
    try {
      const users = await getAllUsers();

      res.json(users);
    } catch (err) {
      console.log(err);
      res.json(error);
    }
  },
  startGame: async function (req, res) {
    //   const userId = req.get("userId");
    //   const { roomId } = req.body;
    //   console.log(roomId);
    //   if (!roomId) {
    //     res.send("error: roomId undefined");
    //     return;
    //   }
    //   const room = await getDoc("rooms", roomId);
    //   if (!room) {
    //     res.send("error: room doesnt exist");
    //     return;
    //   }
    //   if (room.options.players > room.playerList.length) {
    //     res.send("error: not enough players");
    //     return;
    //   }
    //   if (room.hostId !== userId) {
    //     res.send("error");
    //     return;
    //   }
    //   const gameProps = {
    //     name: room.name,
    //     settings: room.options,
    //     players: room.playerList,
    //     hostId: room.hostId,
    //   };
    //   const game = new GameModel(gameProps);
    //   const gameModel = game.get();
    //   room.status = "started";
    //   room.gameId = gameModel.id;
    //   console.log("roooooom", room);
    //   await setDoc("rooms", roomId, room);
    //   await setDoc("games", gameModel.id, gameModel);
    //   res.send(gameModel);
  },
};
