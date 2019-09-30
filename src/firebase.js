import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';
const config = {
    apiKey: "AIzaSyBJiXLtkBDSmpX7NynwIVHsZVMm5YdOgQE",
    authDomain: "yendash-c37c3.firebaseapp.com",
    databaseURL: "https://yendash-c37c3.firebaseio.com",
    projectId: "yendash-c37c3",
    storageBucket: "",
    messagingSenderId: "736322744661",
    appId: "1:736322744661:web:d2a389de1e6ab57804bfdc",
    measurementId: "G-74W8MX6MGB"
  };

  firebase.initializeApp(config);
  export const auth = firebase.auth();
  export const firestore = firebase.firestore();
 
