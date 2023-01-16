import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyALesGjA6LaXhl2L9weGb6uF3tZEWcyzUw",
  authDomain: "chall-dcfa5.firebaseapp.com",
  projectId: "chall-dcfa5",
  storageBucket: "chall-dcfa5.appspot.com",
  messagingSenderId: "314125026209",
  appId: "1:314125026209:web:f3cb1664f8f4b0b7c041e0",
  measurementId: "G-8JNBSNJBMQ"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };