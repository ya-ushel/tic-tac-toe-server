const {
  getFirestore,
  collection,
  query,
  getDocs,
  where,
} = require("firebase/firestore");

const getPlayersBySocketId = async (socketIds) => {
  const db = getFirestore();

  const q = query(
    collection(db, "users", where("socketId", "array-contains", []))
  );

  const querySnapshot = await getDocs(q);
  if (!querySnapshot.empty) {
    console.log("querySnapshot");

    const players = [];
    querySnapshot.forEach((doc) => {
      console.log(doc.id, " => ", doc.data());
      rooms.push(doc.data());
    });
    return players;
  }
  return [];
};

module.exports = { getPlayersBySocketId };
