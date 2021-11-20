const {
  getFirestore,
  collection,
  query,
  getDocs,
  where,
  orderBy,
  limit,
} = require("firebase/firestore");

module.exports = {
  getLeaders: async (req, res) => {
    const db = getFirestore();
    const q = query(
      collection(db, "users"),
      orderBy("rating", "desc"),
      limit(20)
    );

    const querySnapshot = await getDocs(q);

    if (!querySnapshot.empty) {
      const users = [];

      querySnapshot.forEach((doc) => {
        console.log(doc.id, " => ", doc.data());
        users.push(doc.data());
      });

      res.json(users);
    } else {
      res.json([]);
    }
  },
};
