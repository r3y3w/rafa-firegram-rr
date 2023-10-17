import * as firebase from 'firegase/app';
import 'firebase/storage';
import 'firebase/firestore';

// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.4.0/firebase-app.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCuMsixRcM7hiYlmJYO_bskwUxhZiGvdWg",
  authDomain: "rafa-firegram-rr.firebaseapp.com",
  projectId: "rafa-firegram-rr",
  storageBucket: "rafa-firegram-rr.appspot.com",
  messagingSenderId: "364574618961",
  appId: "1:364574618961:web:f1b3bf00362f340bb9cf70"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const projectStorage = firebase.storage();
const projectFirestore = firebase.firestore();

export { projectStorage,projectFirestore };