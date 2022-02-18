import firebase from "firebase/compat/app"
import "firebase/compat/auth";
import "firebase/compat/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyD1Fj9Sm429ZXZcr2hf_Bkm8CDJtQtm7I4",
    authDomain: "eng-eng-dictionary.firebaseapp.com",
    projectId: "eng-eng-dictionary",
    storageBucket: "eng-eng-dictionary.appspot.com",
    messagingSenderId: "526929363422",
    appId: "1:526929363422:web:54e7b03d7178bae1735d4f",
    measurementId: "G-JGLS142VFX"
  };

const firebaseApp = firebase.initializeApp( firebaseConfig );

const db = firebaseApp.firestore();

const auth = firebase.auth();

// const categories = db.collection("categories").get().then;

const getCategories = async ()=>{
  let data = []
  await db.collection("categories").get().then(
    snapshot => {
      snapshot.forEach(
        doc => { data.push(doc.data()) }
      )
    }
  ).catch(error =>{
    return [];
  })
  ;
  return data;
};

const categories = getCategories();

export {db, auth, categories};

