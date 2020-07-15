import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyD36hdqL2_3HKSZJCkPzkCgjzuer9n1DMk",
  authDomain: "instagram-clone-c0211.firebaseapp.com",
  databaseURL: "https://instagram-clone-c0211.firebaseio.com",
  projectId: "instagram-clone-c0211",
  storageBucket: "instagram-clone-c0211.appspot.com",
  messagingSenderId: "888145056566",
  appId: "1:888145056566:web:9ba97af0d75014467b9997",
  measurementId: "G-PJSNT3S1Z1",
});

const db = firebaseApp.firestore();
const auth = firebase.auth();
const storage = firebase.storage();

export { db, auth, storage };
