const {
  getFirestore,
  collection,
  query,
  getDocs,
  where,
} = require("firebase/firestore");

const getUsersOnline = async () => {
  const db = getFirestore();
  const q = query(collection(db, "users"), where("online", "==", true));
  const querySnapshot = await getDocs(q);

  if (!querySnapshot.empty) {
    const users = [];
    querySnapshot.forEach((doc) => {
      console.log(doc.id, " => ", doc.data());
      users.push(doc.data());
    });
    return users;
  }
  return [];
};

const getUsersById = async (ids) => {
  try {
    const db = getFirestore();

    const q = query(collection(db, "users"), where("id", "in", ids));

    const querySnapshot = await getDocs(q);
    if (!querySnapshot.empty) {

      const users = [];
      querySnapshot.forEach((doc) => {
        console.log(doc.id, " => ", doc.data());
        users.push(doc.data());
      });
      return users;
    }
    return [];
  } catch (err) {
    console.log("error", err);
  }
};

module.exports = { getUsersOnline, getUsersById };
