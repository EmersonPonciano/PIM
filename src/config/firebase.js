import firebase from 'firebase/app';
import 'firebase/database';
import { getAuth } from 'firebase/auth';

var firebaseConfig = {
  apiKey: "AIzaSyCwRJNwsRz1uaq8sbcB7vBJ8xb0dRPGWVU",
  authDomain: "projetopim-1e4de.firebaseapp.com",
  databaseURL: "https://projetopim-1e4de-default-rtdb.firebaseio.com",
  projectId: "projetopim-1e4de",
  storageBucket: "projetopim-1e4de.appspot.com",
  messagingSenderId: "774524389541",
  appId: "1:774524389541:web:8cb1ee473eac8da01aa54c",
  measurementId: "G-9H4DVPC0VN",
};

const fireDb = firebase.initializeApp(firebaseConfig);
export default fireDb.database().ref();

export const auth = firebase.auth();