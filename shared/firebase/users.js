const {
  getFirestore,
  collection,
  query,
  getDocs,
} = require("firebase/firestore");

const getAllUsers = async () => {
  const db = getFirestore();

  const q = query(collection(db, "users"));

  const querySnapshot = await getDocs(q);
  if (!querySnapshot.empty) {
    console.log("querySnapshot");

    const rooms = [];
    querySnapshot.forEach((doc) => {
      console.log(doc.id, " => ", doc.data());
      rooms.push(doc.data());
    });
    return rooms;
  }
  return [];
};

module.exports = { getAllUsers };
