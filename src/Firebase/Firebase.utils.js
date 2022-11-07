import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import "firebase/compat/auth";

const Config =  {
  apiKey: "AIzaSyBIKL8io8crZdbjuCuJmAI-7UysazVyc8I",
  authDomain: "crown-d-b.firebaseapp.com",
  projectId: "crown-d-b",
  storageBucket: "crown-d-b.appspot.com",
  messagingSenderId: "947159578208",
  appId: "1:947159578208:web:ab0d2978e103cf4995b505",
  measurementId: "G-Y1SMMS9YXK"
};

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if(!userAuth) return;
  // console.log(firestore.doc('users/123fdrsertrsderwgbd'))
  // in order to get the snapshop of the documenet we use a const and a string interpolation value as below
  const userRef= firestore.doc(`users/${userAuth.uid}`);
  const snapShot = await userRef.get();

  if (!snapShot.exists) {
    const {displayName, email} = userAuth
    const createdAt = new Date();

    try{
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData
      })
    } catch (error) {
      console.log('error creating users', error.messages);
    }
  }

  return userRef;
};

firebase.initializeApp(Config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ Prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
