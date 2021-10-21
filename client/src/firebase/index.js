import { getAuth, signInAnonymously, onAuthStateChanged } from "firebase/auth";
import { addDoc, initFirebase } from "../../../shared/firebase";

initFirebase();

console.log("l kjln");

export const createUser = () => {
  const auth = getAuth();

  console.log("createUser");
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
  const auth = getAuth();

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
