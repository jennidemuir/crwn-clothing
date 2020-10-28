import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyD6aOEJPg_DCCc65k12y_ohrhMuQvPlhQw",
  authDomain: "crwn-db-b1f3c.firebaseapp.com",
  databaseURL: "https://crwn-db-b1f3c.firebaseio.com",
  projectId: "crwn-db-b1f3c",
  storageBucket: "crwn-db-b1f3c.appspot.com",
  messagingSenderId: "755874620316",
  appId: "1:755874620316:web:0c4acb70e9783bda699e59",
  measurementId: "G-2QFYQ82TGH",
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
