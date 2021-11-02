import { getAuth, onAuthStateChanged } from "firebase/auth";
import {
  addDoc,
  createUser,
  initFirebase,
  app,
} from "../../../shared/firebase";

import "firebase/auth";
import "firebase/firestore";
initFirebase();

export const checkAuthState = (login) => {
  const auth = getAuth(app);

  onAuthStateChanged(auth, (user) => {
    createUser();

    if (user) {
      const uid = user.uid;
      const newUser = { user: login, id: uid };
      addDoc("users", newUser);

      localStorage.setItem("login", login);
      localStorage.setItem("id", uid);
    } else {
      // User is signed out
      // ...
    }
  });
};

// createUser();
