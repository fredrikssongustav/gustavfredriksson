const admin = require("firebase-admin");
admin.initializeApp();

const db = admin.firestore();
const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors({origin: "https://gustavfredriksson.com"}));

app.get("/elevator-pitch/:elevatorPitchId", async (req, res) => {
  try {
    const document = db.collection("elevator-pitch")
        .doc(req.params.elevatorPitchId);
    const item = await document.get();
    if (!item.exists) return res.status(404).send();

    return res.status(200).send(item.data());
  } catch (error) {
    console.log(error);
    return res.status(500).send(error);
  }
});

module.exports = { app };
