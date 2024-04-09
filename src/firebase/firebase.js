// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCKp7OrEQwFIt6n3FiR9oyHCuTQ4f_iNEU",
  authDomain: "auth-mohamilon-20488.firebaseapp.com",
  projectId: "auth-mohamilon-20488",
  storageBucket: "auth-mohamilon-20488.appspot.com",
  messagingSenderId: "1035963308538",
  appId: "1:1035963308538:web:86e67f70a02b167700ac43"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;