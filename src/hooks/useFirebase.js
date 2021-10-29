import { useState, useEffect } from "react";
import {
  GoogleAuthProvider,
  getAuth,
  signInWithPopup,
  signOut,
  onAuthStateChanged,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
  sendEmailVerification,
  sendPasswordResetEmail,
} from "firebase/auth";
import initializeAuthentication from "../Firebase/firebase.config";

initializeAuthentication();

//use firebase hook
const useFirebase = () => {
  const [user, setUser] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  const auth = getAuth();

  const signInUsingEmailAndPassword = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };

  const signInUsingGoogle = () => {
    setIsLoading(true);
    const googleProvider = new GoogleAuthProvider();
    return signInWithPopup(auth, googleProvider);
  };
  // observe user state change

  const registerNewUser = ({ email, password, username }) => {
    createUserWithEmailAndPassword(auth, email, password)
      .then((result) => {
        verifyEmail();
        setUserName(username);
      })
      .catch((error) => {});
  };

  const setUserName = (name) => {
    updateProfile(auth.currentUser, { displayName: name }).then((result) => {
      setUser(auth.currentUser);
    });
  };

  const verifyEmail = () => {
    sendEmailVerification(auth.currentUser).then((result) => {});
  };

  const handleResetPassword = ({ email }) => {
    sendPasswordResetEmail(auth, email)
      .then((result) => {})
      .catch((error) => {
        console.log(error);
      });
  };

  // observe user state change
  useEffect(() => {
    const unsubscribed = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
      } else {
        setUser({});
      }
      setIsLoading(false);
    });
    return () => unsubscribed;
  }, [auth]);

  const logOut = () => {
    setIsLoading(true);
    signOut(auth)
      .then(() => {})
      .finally(() => setIsLoading(false));
  };

  return {
    user,
    signInUsingGoogle,
    logOut,
    setUser,
    isLoading,
    setIsLoading,
    signInUsingEmailAndPassword,
    createUserWithEmailAndPassword,
    registerNewUser,
    handleResetPassword,
  };
};

export default useFirebase;
