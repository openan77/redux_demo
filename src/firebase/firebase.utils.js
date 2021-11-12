import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const config = {
  apiKey: "AIzaSyD5YnL5u1QWQA2ybfJ_cbyTDhpkYhPqWIE",
  authDomain: "openan77-db-74f6d.firebaseapp.com",
  projectId: "openan77-db-74f6d",
  storageBucket: "openan77-db-74f6d.appspot.com",
  messagingSenderId: "991000355934",
  appId: "1:991000355934:web:7d5cab5409ab8afff240cf",
  measurementId: "G-HRN6NXRN1D"
};

firebase.initializeApp(config);

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);

  const snapShot = await userRef.get();

  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();
    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData
      });
    } catch (error) {
      console.log('error creating user', error.message);
    }
  }

  return userRef;
};

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
