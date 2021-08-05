import firebase from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
// eslint-disable-next-line no-unused-vars
const firebaseConfig = {
    apiKey: "AIzaSyDixk6uKeLa50TfZzk4e8S335rzaOPf9x4",
    authDomain: "facebook-clone-56153.firebaseapp.com",
    projectId: "facebook-clone-56153",
    storageBucket: "facebook-clone-56153.appspot.com",
    messagingSenderId: "118964172556",
    appId: "1:118964172556:web:55ce63a3ff2a4fec6cfb29",
    measurementId: "G-NVHD7EL1NP"
  };

  const firebaseapp = firebase.initializeApp(firebaseConfig);
  const db = firebaseapp.firestore();
  const auth = firebase.auth();

  const provider = new firebase.auth.GoogleAuthProvider();

  export{ auth, provider};
  export default db;
  