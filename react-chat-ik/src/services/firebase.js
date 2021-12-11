import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import "firebase/compat/database";
const config = {
  apiKey: "AIzaSyBqXUSz_GAQeN6qiWgJVQmr-VS8Lr4ZdbM",
  authDomain: "react-chat-ik.firebaseapp.com",
  databaseURL: "https://react-chat-ik-default-rtdb.europe-west1.firebasedatabase.app/"
};

firebase.initializeApp(config);

export const auth = firebase.auth;
export const db = firebase.database();

//
// // Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
// // TODO: Add SDKs for Firebase products that you want to use
// // https://firebase.google.com/docs/web/setup#available-libraries
//
// // Your web app's Firebase configuration
// // For Firebase JS SDK v7.20.0 and later, measurementId is optional
// const firebaseConfig = {
//   apiKey: "AIzaSyBqXUSz_GAQeN6qiWgJVQmr-VS8Lr4ZdbM",
//   authDomain: "react-chat-ik.firebaseapp.com",
//   projectId: "react-chat-ik",
//   storageBucket: "react-chat-ik.appspot.com",
//   messagingSenderId: "1050597860196",
//   appId: "1:1050597860196:web:1bb39f4f809f4e54fe5071",
//   measurementId: "${config.measurementId}",
//   databaseURL: "https://react-chat-ik-default-rtdb.europe-west1.firebasedatabase.app/"
// };
//
// // Initialize Firebase
// const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

