import {
  getAuth,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithPopup,
  signOut,
} from "@firebase/auth";
import { useEffect, useState } from "react";
import InitializeFirebase from "../Firebase/Firebase.init";

InitializeFirebase();
export const useFirebase = () => {
  const auth = getAuth();
  const [user, setUser] = useState({});
  const googleProvider = new GoogleAuthProvider();
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
        setUserLocalStorage(user);
      } else {
        setUser({});
        // User is signed out
        // ...
      }
    });
  }, []);
  const setUserLocalStorage = (user) => {
    localStorage.setItem("user", JSON.stringify(user));
  };
  const signInUsingGoogle = () => {
    return signInWithPopup(auth, googleProvider);
  };
  const signOutFromAccount = () => {
    signOut(auth)
      .then(() => {
        setUserLocalStorage({});
        // Sign-out successful.
      })
      .catch((error) => {
        // An error happened.
      });
  };
  return {
    user,
    setUser,
    signOutFromAccount,
    signInUsingGoogle,
  };
};
