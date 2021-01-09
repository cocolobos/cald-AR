const admin = require("firebase-admin");

const serviceAccount = require("../../caldar-firebase.json");

const firebaseApp = admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
});

module.exports = firebaseApp;