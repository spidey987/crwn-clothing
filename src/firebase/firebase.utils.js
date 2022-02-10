import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';

const config = {
    apiKey: "AIzaSyC9cOG8dQ1xOx7kLp9ZS9iK2fcSXeKaoV4",
    authDomain: "crwn-db-644db.firebaseapp.com",
    projectId: "crwn-db-644db",
    storageBucket: "crwn-db-644db.appspot.com",
    messagingSenderId: "142583449218",
    appId: "1:142583449218:web:e4a615b848ffc1fc85169b",
    measurementId: "G-T22GCB8LP8"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;