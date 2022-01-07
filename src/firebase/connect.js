import { initializeApp } from 'firebase/app';
import { getAuth, GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyB6Ncvkojgb0jnMVInuJCraZRtGLPsLzVk",
    authDomain: "react-ecom-website.firebaseapp.com",
    projectId: "react-ecom-website",
    storageBucket: "react-ecom-website.appspot.com",
    messagingSenderId: "945645437528",
    appId: "1:945645437528:web:e3d6aef898873f8f45c02d",
    measurementId: "G-3W1KYDBDZB"
};

initializeApp(firebaseConfig);

export const auth = getAuth();
export const firestore = getFirestore();

const provider = new GoogleAuthProvider();
provider.setCustomParameters({ params: 'select_account' });
export const signInWithGoogle = () => signInWithPopup(auth, provider);

