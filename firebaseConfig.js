// Import the functions you need from the SDKs you need
import { initializeApp, getApps } from "firebase/app";
import {getStorage} from "firebase/storage"

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDWf9nouvKyIK4VwNe5yqYdBbt1WdW_lQk",
  authDomain: "pratoimage.firebaseapp.com",
  projectId: "pratoimage",
  storageBucket: "pratoimage.appspot.com",
  messagingSenderId: "978358530675",
  appId: "1:978358530675:web:e20e455d3509757b5e7006",
  measurementId: "G- 26G3WVM0VJ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig)
const storage = getStorage()
export {app, storage}


//fazer assim


