import firebase from "firebase/compat/app";
import "firebase/compat/app";
import "firebase/compat/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCgEwebcdT-2Q5n4qZGyN_go_gzO3b5Kb8",
  authDomain: "finallyproject-dbc2a.firebaseapp.com",
  projectId: "finallyproject-dbc2a",
  storageBucket: "finallyproject-dbc2a.appspot.com",
  messagingSenderId: "12093675447",
  appId: "1:12093675447:web:d975c1ee7ddcda7d487a32",
  measurementId: "G-PGGQ1D7M7G",
};
//Инициализируем firebase
const fire = firebase.initializeApp(firebaseConfig);

export default fire;
