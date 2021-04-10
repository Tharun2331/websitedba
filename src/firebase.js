import firebase from "firebase";



// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBTzFzew05y7N-FBAlthfqXiwXR0C49hUU",
  authDomain: "dba-22a55.firebaseapp.com",
  projectId: "dba-22a55",
  storageBucket: "dba-22a55.appspot.com",
  messagingSenderId: "1082525787633",
  appId: "1:1082525787633:web:ddd8ac39d4cafd1c411050",
  measurementId: "G-D9R6X82D7K"
};
  const firebaseApp = firebase.initializeApp(firebaseConfig);

// Creation of database
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };


