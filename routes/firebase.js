const firebase = require('firebase');
// require("firebase/storage");
const serviceAccount = require('../config/investfar-b494a-firebase-adminsdk-4puhb-6f98327175.json'); // Replace with the correct path to your service account key JSON file

const firebaseConfig = {
  apiKey: "AIzaSyA2pq-jg4LFy8R_EgRCDmhD1qLZyZq7Xhw",
  authDomain: "investfar-b494a.firebaseapp.com",
  databaseURL: "https://investfar-b494a.firebaseio.com",
  projectId: "investfar-b494a",
  storageBucket: "investfar-b494a.appspot.com",
  messagingSenderId: "328462702651",
  appId: "1:328462702651:web:25e89ddd8c0260a385641e",
  measurementId: "G-MRT32PP2SW",
};

firebase.initializeApp(firebaseConfig);
module.exports = firebase;

