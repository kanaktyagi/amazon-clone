import firebase from "firebase";

const firebaseConfig= ({
    apiKey: "AIzaSyAYpGNswzBRSUlAICPOWs675c69nOYVh6w",
    authDomain: "clone-c3161.firebaseapp.com",
    databaseURL: "https://clone-c3161.firebaseio.com",
    projectId: "clone-c3161",
    storageBucket: "clone-c3161.appspot.com",
    messagingSenderId: "768273071660",
    appId: "1:768273071660:web:9aeeda8c8da4debf621b89",
    measurementId: "G-9ZRS2YW39S"
  });
  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const auth = firebase.auth();

  export {auth};