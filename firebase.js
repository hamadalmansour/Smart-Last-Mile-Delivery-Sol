
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';



const app = firebase.initializeApp({
    apiKey: "AIzaSyDod22F_AasYYFKPdaY9KZhUhQtvQTmpvE",
  authDomain: "smart-last-mile.firebaseapp.com",
  projectId: "smart-last-mile",
  storageBucket: "smart-last-mile.appspot.com",
  messagingSenderId: "467503342921",
  appId: "1:467503342921:web:0727c95c5d729677742698"
});


export const auth = app.auth()
export default app;