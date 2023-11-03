<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <script type="text/javascript" async src="./script.js"></script>
    <link rel="stylesheet" href="style.css">
    <title>ShadowTaskManager</title>
</head>
<body>
<script type="module">
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
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);
</script>
    <span class="container">
        <div class="panel-one">
            <h3 class="h3-account">Account</h3>
        </div>
        <div class="panel-two">

        </div>
        <div class="panel-three">
            <h1 class="ShadowTaskManager">ShadowTaskManager</h1>
        </div>
        <span>
            <div id="search-engine-div-one" class="search-engine-div-one">
                <h3 id="searc-engine-h3-one" class="searc-engine-h3-one">Search Tasks</h3>
                <input id="inp-search-engine" class="inp-search-engine" type="text">
            </div>
        </span>
        <div class="View-All">
            <h3 class="View-All-h3">View All</h3>
        </div>
        <div class="Deleted">
            <h3 class="Deleted-h3">Deleted</h3>
        </div>
        <div class="Active">
            <h3 class="Active-h3">Active</h3>
        </div>
        <div id="Create" class="Create">
            <h3 id="Create-h3" class="Create-h3">Create</h3>
        </div>
        <span>
            <div class="tasks-container">
                <h3 class="tasks-container-description">Name </h3>
                <h3 class="tasks-container-name">Description</h3> 
            </div>
        </span>
        <span id="tasks-container-naimer">
            <div class="tasks-naimer"></div>
            <input placeholder="Type the name of the task" type="text" name="text" id="inp-txt-tasks-name">
            <input placeholder="Type a short description" type="text" id="inp-txt-tasks-descripcion">
            <h6 id="aprove-tasks-naimer">Approve</h6>
        </span>
    </span>
    <script type="module" src="./data.js"></script>
</body>
</html>