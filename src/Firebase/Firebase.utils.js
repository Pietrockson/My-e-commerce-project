import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import "firebase/compat/auth";

const Config = {
  apiKey: "AIzaSyBIKL8io8crZdbjuCuJmAI-7UysazVyc8I",
  authDomain: "crown-d-b.firebaseapp.com",
  projectId: "crown-d-b",
  storageBucket: "crown-d-b.appspot.com",
  messagingSenderId: "947159578208",
  appId: "1:947159578208:web:e5475e210d82d6f995b505",
  measurementId: "G-5DCYNB630W",
};

firebase.initializeApp(Config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ Prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
