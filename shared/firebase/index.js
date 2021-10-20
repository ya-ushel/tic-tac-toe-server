const { initializeApp } = require("firebase/app");
const {
  getFirestore,
  collection,
  addDoc: addDocFb,
  getDoc: getDocFb,
} = require("firebase/firestore");

const { firebaseConfig } = require("../config");

const initFirebase = () => {
  console.log("initFirebase");
  const app = initializeApp(firebaseConfig);
};

const addDoc = async (collectionName, data) => {
  const db = getFirestore();

  try {
    const docRef = await addDocFb(collection(db, collectionName), data);
    console.log("Document written with ID: ", docRef.id);
  } catch (e) {
    console.error("Error adding document: ", e);
  }
};

const getDoc = async (collectionName, id) => {
  const db = getFirestore();

  const docRef = doc(db, collection, id);
  const docSnap = await getDocFb(docRef);

  if (docSnap.exists()) {
    console.log("Document data:", docSnap.data());
    return docSnap.data();
  } else {
    console.log("No such document!");
  }
};

module.exports = { getDoc, addDoc, initFirebase };
