// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: 'AIzaSyDn41nyxwQgWw_mH0Yyjb1uP1SCLeiedAA',
    authDomain: 'proofapp-b01e6.firebaseapp.com',
    projectId: 'proofapp-b01e6',
    storageBucket: 'proofapp-b01e6.appspot.com',
    messagingSenderId: '518314205984',
    appId: '1:518314205984:web:4aa4f8fda57e2c3ac5ed45'
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const firebaseApp = app
