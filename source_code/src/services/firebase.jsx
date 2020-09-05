import React from "react";

const config = {
  apiKey: "AIzaSyCwbOEsYAEdwnWoLH6VHgQAJlQTJ-Sz_QY",
  authDomain: "portfolio-44b1e.firebaseapp.com",
  databaseURL: "https://portfolio-44b1e.firebaseio.com",
  projectId: "portfolio-44b1e",
  storageBucket: "portfolio-44b1e.appspot.com",
  messagingSenderId: "597434073411",
  appId: "1:597434073411:web:b3cf4466c2a1b1675faff6",
  measurementId: "G-Y3TJW2DJ5X"
};
firebase.initializeApp(config);

export const auth = firebase.auth();
export const db = firebase.firestore();
