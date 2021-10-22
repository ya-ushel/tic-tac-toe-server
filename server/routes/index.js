const { addDoc, setDoc, getDoc } = require("../../shared/firebase");
const { getAllRooms } = require("../../shared/firebase/rooms");
const { defaultGameOptions } = require("../../shared/config");
const { GameModel } = require("../models");

module.exports = {
  createLobby: async function (req, res) {
    try {
      const options = req.query.options || defaultGameOptions;
      const name = req.query.name || "Default room name";
      const hostId = req.get("userId") || 1;
      const playerList = [hostId];
      console.log("hostId", hostId);
      if (!hostId) {
        res.send("error");
        return;
      }

      const newLobby = {
        status: "created",
        name,
        hostId,
        playerList,
        options,
      };

      const id = await addDoc("rooms", newLobby);

      newLobby.id = id;

      await setDoc("rooms", id, newLobby);
      res.json(newLobby);
    } catch (error) {
      console.log("createLobby error", req, error);
    }
  },
  joinLobby: async function (req, res) {
    try {
      const userId = req.get("userId");
      const roomId = req.query.roomId;

      if (!userId) {
        res.send("error");
        return;
      }

      if (!roomId) {
        res.send("error");
        return;
      }
      const room = await getDoc("rooms", roomId);
      room.playerList.push(userId);

      const newLobby = await setDoc("rooms", roomId, room);
      res.json(newLobby);
    } catch (error) {
      console.log("joinLobby error", req, error);
    }
  },
  leaveLobby: async function (req, res) {
    try {
      const userId = req.get("userId");
      const roomId = req.query.roomId;

      if (!userId) {
        res.send("error");
        return;
      }

      if (!roomId) {
        res.send("error");
        return;
      }
      const room = await getDoc("rooms", roomId);
      const playerList = room.playerList.filter((p) => p !== userId);
      room.playerList = playerList;
      console.log(playerList);

      const newLobby = await setDoc("rooms", roomId, room);
      res.json(newLobby);
    } catch (error) {
      console.log("leaveLobby error", req, error);
    }
  },
  getRooms: async function (req, res) {
    try {
      const rooms = await getAllRooms();

      res.json(rooms);
    } catch (err) {
      console.log(err);
    }
  },
  startGame: async function (req, res) {
    const userId = req.get("userId");
    const roomId = req.query.roomId;
    console.log(roomId);

    if (!roomId) {
      res.send("error");
      return;
    }

    const room = await getDoc("rooms", roomId);

    if (room.options.players > room.playerList.length) {
      res.send("error");
      return;
    }

    // if (room.hostId !== userId) {
    //   res.send("error");
    //   return;
    // }

    room.status = "started";
    console.log(room);
    await setDoc("rooms", roomId, room);

    const gameProps = {
      settings: room.options,
      players: room.playerList,
      hostId: room.hostId,
    };
    const game = new GameModel(gameProps).get();
    await addDoc("games", game);
    console.log(game);
    res.send(game);
  },
};
