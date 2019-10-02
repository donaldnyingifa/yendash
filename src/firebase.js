import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';
import 'firebase/database';
import 'firebase/storage';
const config = {
    apiKey: "",
    authDomain: "yendash-c37c3.firebaseapp.com",
    databaseURL: "https://yendash-c37c3.firebaseio.com",
    projectId: "yendash-c37c3",
    storageBucket: "gs://yendash-c37c3.appspot.com",
    messagingSenderId: "736322744661",
    appId: "1:736322744661:web:d2a389de1e6ab57804bfdc",
    measurementId: "G-74W8MX6MGB"
  };

  firebase.initializeApp(config);
  export const auth = firebase.auth();
  export const firestore = firebase.firestore();
  export const database = firebase.database();
 export const storage = firebase.storage();
