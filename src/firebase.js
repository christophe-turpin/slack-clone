import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyDwXg4LTi8XLHuQFfnrHNKMqDT89mMaV64",
  authDomain: "slack-clone-6b650.firebaseapp.com",
  projectId: "slack-clone-6b650",
  storageBucket: "slack-clone-6b650.appspot.com",
  messagingSenderId: "856951721985",
  appId: "1:856951721985:web:f74bcc774ced8a5f1e3000",
  measurementId: "G-JD080VH3MH",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;
