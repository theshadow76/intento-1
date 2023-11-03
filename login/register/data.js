// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.7.0/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.7.0/firebase-analytics.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDU0_gpdQ7ZNwNnz6WaZx6Uzkwwg5i01Hw",
  authDomain: "shadow-manager.firebaseapp.com",
  databaseURL: "https://shadow-manager-default-rtdb.firebaseio.com",
  projectId: "shadow-manager",
  storageBucket: "shadow-manager.appspot.com",
  messagingSenderId: "626264626972",
  appId: "1:626264626972:web:c222ad25f674aa459a4cd9",
  measurementId: "G-9QHYQNPF6B"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const mail = document.getElementById("email");
const password = document.getElementById("password");

const auth = firebase.auth;
const database = firebase.database;
auth.createUserWithEmailAndPassword(mail, password)
.then(function () {
    var user = auth.currentUser;

    var database_ref = database.ref();

    var user_data = {
        email : mail,
        pwd : password,
        last_login : Date.now()
    }

    database_ref.child('users/' + user.uid).set(user_data);

    alert ("User created successfully")
})
.catch(function (err) {
    var error_code = err.code;
    var error_message = err.message;
    alert(error_message);
})