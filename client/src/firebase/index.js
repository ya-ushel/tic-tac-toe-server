import { getAuth, signInAnonymously, onAuthStateChanged } from "firebase/auth";
import { addDoc, initFirebase, app } from "../../../shared/firebase";

export const createUser = () => {
  const auth = getAuth(app);

  signInAnonymously(auth)
    .then(() => {})
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log(error, "error");
    });
};

export const checkAuthState = (login) => {
  console.log("checkAuthState");
  const auth = getAuth(app);

  onAuthStateChanged(auth, (user) => {
    console.log("onAuthStateChanged");
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
