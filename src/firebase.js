import firebase from 'firebase';

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyBeYDnsz-zum5XIUvGl_Qg_9t8CDyrzfVk",
    authDomain: "facebook-messenger-clone-648ae.firebaseapp.com",
    databaseURL: "https://facebook-messenger-clone-648ae-default-rtdb.firebaseio.com",
    projectId: "facebook-messenger-clone-648ae",
    storageBucket: "facebook-messenger-clone-648ae.appspot.com",
    messagingSenderId: "457122484570",
    appId: "1:457122484570:web:097ed000c4bcbb80216363",
    measurementId: "G-ZGR9HVD235"
});

const db = firebaseApp.firestore();

export default db;