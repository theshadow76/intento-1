import { initializeApp } from "https://www.gstatic.com/firebasejs/9.7.0/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.7.0/firebase-analytics.js";
import { getAuth, signInWithCustomToken, signOut, GoogleAuthProvider, signInWithPopup } from "https://www.gstatic.com/firebasejs/9.7.0/firebase-auth.js";
// Follow this pattern to import other Firebase services
// import { } from 'firebase/<service>';

const provider = new GoogleAuthProvider();

const email = document.getElementById("email");
const password = document.getElementById("password");

// TODO: Replace the following with your app's Firebase project configuration
const firebaseConfig = {
  apiKey: "AIzaSyDU0_gpdQ7ZNwNnz6WaZx6Uzkwwg5i01Hw",
  authDomain: "shadow-manager.firebaseapp.com",
  databaseURL: "https://shadow-manager-default-rtdb.firebaseio.com",
  projectId: "shadow-manager",
  storageBucket: "shadow-manager.appspot.com",
  messagingSenderId: "626264626972",
  appId: "1:626264626972:web:011eaf51794fdb229a4cd9",
  measurementId: "G-6RF6GZKB2N"
};

const app = initializeApp(firebaseConfig);
// const db = getFirestore(app);

const auth = getAuth();

const google = document.getElementById("login-google").addEventListener("click", function(){
  signInWithPopup(auth, provider)
  .then((result) => {
    // This gives you a Google Access Token. You can use it to access the Google API.
    const credential = GoogleAuthProvider.credentialFromResult(result);
    const token = credential.accessToken;
    // The signed-in user info.
    const user = result.user;
    // ...
  }).catch((error) => {
    // Handle Errors here.
    const errorCode = error.code;
    const errorMessage = error.message;
    // The email of the user's account used.
    const email = error.email;
    // The AuthCredential type that was used.
    const credential = GoogleAuthProvider.credentialFromError(error);
    // ...
  });
})



signOut(auth).then(() => {
    // Sign-out successful.
  }).catch((error) => {
    // An error happened.
  });