  import firebase from "firebase";

  const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyD99Azj64oPxMG2O2sfBH984JYas2hRBVc",
    authDomain: "clone-todo.firebaseapp.com",
    databaseURL: "https://clone-todo.firebaseio.com",
    projectId: "clone-todo",
    storageBucket: "clone-todo.appspot.com",
    messagingSenderId: "812437609952",
    appId: "1:812437609952:web:32f9a9fe1a14c8251d9f85",
    measurementId: "G-KNFDE336LY"

  });

  const db = firebaseApp.firestore();
  
  export default db;