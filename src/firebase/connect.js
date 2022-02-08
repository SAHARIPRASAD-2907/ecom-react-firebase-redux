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

export const createUserProfileDocument = async (userAuth, additionalData) =>{
    if (!userAuth) return;

    const userRef = firestore.collection('users').doc(userAuth.uid);

    const snapShop = await userRef.get();

    if (!snapShop.exists) {
        const { displayName, email } = userAuth;
        const createdAt = new Date();

        try {
            await userRef.set({
                displayName,
                email,
                createdAt,
                ...additionalData,
            });

            console.log('user creation successfull.');
        } catch (error) {
            console.log('Error creating user', error.message);
        }
    }

    return userRef;
}

initializeApp(firebaseConfig);

export const auth = getAuth();
export const firestore = getFirestore();

const provider = new GoogleAuthProvider();
provider.setCustomParameters({ params: 'select_account' });
export const signInWithGoogle = () => signInWithPopup(auth, provider);

