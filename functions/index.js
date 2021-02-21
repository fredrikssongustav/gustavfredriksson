const functions = require("firebase-functions");
const admin = require("firebase-admin");
const express = require("express");
const cors = require("cors");

admin.initializeApp(functions.config().firebase);

const db = admin.firestore();

const main = express();
main.use(cors({origin: "https://gustavfredriksson.com"}));

const app = express();

app.get("/elevator-pitch/:elevatorPitchId", async (req, res) => {
  try {
    const document = db.collection("elevator-pitch")
        .doc(req.params.elevatorPitchId);
    const item = await document.get();
    const response = item.data();

    if (!response) {
      return res.status(404).send();
    }

    return res.status(200).send(response);
  } catch (error) {
    console.log(error);
    return res.status(500).send(error);
  }
});

main.use("/v1", app);

exports.app = functions.https.onRequest(main);
