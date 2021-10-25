const { initializeApp } = require("firebase/app");
const {
  getFirestore,
  collection,
  setDoc: setDocFb,
  addDoc: addDocFb,
  getDoc: getDocFb,
  query,
  where,
  doc,
} = require("firebase/firestore");
import "firebase/auth";
import "firebase/firestore";

const { firebaseConfig } = require("../config");
let app = null;
const initFirebase = () => {
  console.log("initFirebase");
  app = initializeApp(firebaseConfig);
};

const addDoc = async (collectionName, data) => {
  const db = getFirestore();

  try {
    const docRef = await addDocFb(collection(db, collectionName), data);
    console.log("Document written with ID: ", docRef.id);
    return docRef.id;
  } catch (e) {
    console.error("Error adding document: ", e);
  }
};

const getDoc = async (collectionName, id) => {
  const db = getFirestore();

  const docRef = doc(db, collectionName, id);
  const docSnap = await getDocFb(docRef);

  if (docSnap.exists()) {
    console.log("Document data:", docSnap.data());
    return docSnap.data();
  } else {
    console.log("No such document!");
  }
};

const setDoc = async (collectionName, id, data) => {
  const db = getFirestore();

  await setDocFb(doc(db, collectionName, id), data);
};

export { getDoc, addDoc, setDoc, initFirebase, app };
// module.exports = { getDoc, addDoc, setDoc, initFirebase };
