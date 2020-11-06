import firebase from "firebase";


const firebaseConfig = {
    apiKey: "AIzaSyASJHmzSJre18Z3e9sB3tEOr7QEwPvAWeo",
    authDomain: "ecomsite1331.firebaseapp.com",
    databaseURL: "https://ecomsite1331.firebaseio.com",
    projectId: "ecomsite1331",
    storageBucket: "ecomsite1331.appspot.com",
    messagingSenderId: "599691341259",
    appId: "1:599691341259:web:b22379ad9ad1f61b7a1a4e",
    measurementId: "G-PT0VBV628K"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);




const auth = firebase.auth();

export {auth};