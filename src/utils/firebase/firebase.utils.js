import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";

import { getFirestore, getDoc, setDoc, doc } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyB0Fxw7_phIKonCAz7IlsdGzuFN3caCi30",
  authDomain: "crwn-clothing-db-78f91.firebaseapp.com",
  projectId: "crwn-clothing-db-78f91",
  storageBucket: "crwn-clothing-db-78f91.appspot.com",
  messagingSenderId: "638698735903",
  appId: "1:638698735903:web:ff21b23f3c1f195695482a",
};

//Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);
const googleProvider = new GoogleAuthProvider();

googleProvider.setCustomParameters({
  prompt: "select_account",
});

export const auth = getAuth();

const db = getFirestore();

export const signInWithGooglePopUp = () =>
  signInWithPopup(auth, googleProvider);

export const registerFromAuth = async (
  userAuth,
  additionalInformation = {}
) => {
  const userDocRef = doc(db, "users", userAuth.uid);
  const userDocument = await getDoc(userDocRef);

  if (!userDocument.exists()) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    console.log({ ...additionalInformation });
    try {
      await setDoc(userDocRef, {
        displayName,
        email,
        createdAt,
        ...additionalInformation,
      });
    } catch (error) {
      console.log("Error registering the user", error.code);
    }
  }

  return userDocRef;
};

export const createAuthUserWithEmailAndPassword = async (email, password) => {
  if (!email || !password) return;

  try {
    return await createUserWithEmailAndPassword(auth, email, password);
  } catch (error) {
    switch (error.code) {
      case "auth/weak-password":
        alert("Password must contain at least 6 characters");
        break;
      default:
        console.log(error);
    }
  }
};

export const signInAuthUserWithEmailAndPassword = async (email, password) => {
  if (!email || !password) return;

  try {
    return await signInWithEmailAndPassword(auth, email, password);
  } catch (error) {
    switch (error.code) {
      case "auth/invalid-credential":
        alert("Incorrect user or password");
        break;
      default:
        console.log(error);
    }
  }
};
