import firebase from "firebase/app";

import "firebase/analytics";
import "firebase/auth";
import "firebase/firestore";

var firebaseConfig = {
  apiKey: "AIzaSyC9zPkYKIpXV-i6-ZtygqGuia9Qda2FHSo",
  authDomain: "mutosi-chat.firebaseapp.com",
  projectId: "mutosi-chat",
  storageBucket: "mutosi-chat.appspot.com",
  messagingSenderId: "871571595419",
  appId: "1:871571595419:web:5ced25e13d4ebc6c6ce63e",
  measurementId: "G-P8PBQ2PZXL",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();

const auth = firebase.auth();
const db = firebase.firestore();

export { db, auth };
export default firebase;
