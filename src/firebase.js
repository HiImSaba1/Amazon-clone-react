import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyDoWnhUTOXAKikB8IMqlmYiAN_qcAqVYM0",
  authDomain: "clone-4972f.firebaseapp.com",
  databaseURL: "https://clone-4972f.firebaseio.com",
  projectId: "clone-4972f",
  storageBucket: "clone-4972f.appspot.com",
  messagingSenderId: "751544694956",
  appId: "1:751544694956:web:93e3955a815a6cab24c709",
  measurementId: "G-B5T14611SH",
};
const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
export { db, auth };