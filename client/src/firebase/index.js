import { getAuth, onAuthStateChanged } from "firebase/auth";
import {
  setDoc,
  createUser,
  initFirebase,
  app,
} from "../../../shared/firebase";
import axios from "../axios";
import "firebase/auth";
import "firebase/firestore";
initFirebase();

export const checkAuthState = (data) => {
  const auth = getAuth(app);

  onAuthStateChanged(auth, (user) => {
    createUser();

    if (user) {
      const uid = user.uid;
      const newUser = {
        nickname: data.nickname,
        id: uid,
        avatarColor: data.avatarColor,
        gameHistory: data.gameHistory,
        coins: data.coins,
        experience: data.experience,
        rating: data.rating,
      };
      setDoc("users", uid, newUser);

      localStorage.setItem("nickname", data.nickname);
      localStorage.setItem("id", uid);
    } else {
      // User is signed out
      // ...
    }
  });
};

export const leaveRoom = async (roomId, userId) => {
  try {
    const res = await axios.post(
      "rooms/leave",
      {
        roomId: roomId,
      },
      { headers: { userId: userId } }
    );
    console.log(res);
  } catch (error) {
    console.log("error", error);
  }
};

export const joinRoom = async (roomId, userId) => {
  try {
    const res = await axios.post(
      "rooms/join",
      {
        roomId: roomId,
      },
      { headers: { userId: userId } }
    );
    console.log(res);
  } catch (error) {
    console.log("error", error);
  }
};

// createUser();
