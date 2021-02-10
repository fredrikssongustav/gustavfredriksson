const functions = require("firebase-functions");
const admin = require("firebase-admin");
const express = require("express");

admin.initializeApp(functions.config().firebase);
const app = express();

app.get("/hello", (req, res) => {
  res.send("world");
});

exports.app = functions.https.onRequest(app);
