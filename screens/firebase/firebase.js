import * as firebase from 'firebase';
import "firebase/auth";
import "firebase/firestore";

// Optionally import the services that you want to use
//import "firebase/database";
//import "firebase/functions";
//import "firebase/storage";


const firebaseConfig = {
    apiKey: "AIzaSyAXIAbbj3k3z3S3t6o4DXZUWa1uPjytXaI",
    authDomain: "project-rn-a9e44.firebaseapp.com",
    databaseURL: "https://project-rn-a9e44-default-rtdb.firebaseio.com",
    projectId: "project-rn-a9e44",
    storageBucket: "project-rn-a9e44.appspot.com",
    messagingSenderId: "569109975726",
    appId: "1:569109975726:web:8a63c772c733e5cfffd33f"
  };

let app;

if(firebase.apps.length === 0) {
    app = firebase.initializeApp(firebaseConfig)
} else {
    app = firebase.app();
}
  
const db = app.firestore();
const auth = firebase.auth();
const realtimeDB = firebase.database();

export {db, auth,realtimeDB};