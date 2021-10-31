const {
  addDoc,
  setDoc,
  getDoc,
  deleteDoc,
} = require("../../../shared/firebase");

const registerUserHandlers = async (io, socket, userId) => {
  //   const getUsers = () => {
  //     io.in(socket.roomId).emit("users", users);
  //   };

  //   const addUser = ({ username, userId }) => {
  //     if (!users[userId]) {
  //       users[userId] = { username, online: true };
  //     } else {
  //       users[userId].online = true;
  //     }
  //     getUsers();
  //   };

  //   const removeUser = (userId) => {
  //     users[userId].online = false;
  //     getUsers();
  //   };

  //   socket.on("user:get", getUsers);
  //   socket.on("user:add", addUser);
  //   socket.on("user:leave", removeUser);

  const setUserOnline = async (value) => {
    const user = await getDoc("users", userId);

    user.online = value;

    await setDoc("users", userId, user);
  };

  await setUserOnline(true);

  socket.on("disconnect", async (reason) => {
    await setUserOnline(false);
    console.log("user disconnected", reason);
  });
};

module.exports.registerUserHandlers = registerUserHandlers;
