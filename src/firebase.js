import firebase from 'firebase/app';
import 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'TUAPIOQUI',
  authDomain: 'TUAUTHDOMAIN',
  projectId: 'TUPROJECTID',
  storageBucket: 'TUSTORAGEBUCKET',
  messagingSenderId: 'TUMESSAGINGSENDERID',
  appId: 'TUAPPID',
};

firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();

export { db };
