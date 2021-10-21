const {
  getFirestore,
  collection,
  query,
  where,
} = require("firebase/firestore");

const getAllRooms = async () => {
  const db = getFirestore();

  const q = query(collection(db, "rooms"));

  const querySnapshot = await getDocs(q);
  const rooms = querySnapshot.maps((doc) => {
    console.log(doc.id, " => ", doc.data());
    return doc.data();
  });
  return rooms;
};

module.exports = { getAllRooms };
