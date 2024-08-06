
  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.5/firebase-app.js";

  import { getAuth , createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.12.5/firebase-auth.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  const firebaseConfig = {
    apiKey: "AIzaSyButMbyjeakmIutqn8CbZsCpbucs9xBf8k",
    authDomain: "auth-3f28d.firebaseapp.com",
    projectId: "auth-3f28d",
    storageBucket: "auth-3f28d.appspot.com",
    messagingSenderId: "892517791552",
    appId: "1:892517791552:web:76902cc03f224bc0bd6ca5"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);    
  
  const auth = getAuth(app);

console.log(app);
console.log(auth);

let email = document.getElementById("email")

let password = document.getElementById("password")

let button = document.getElementById("button")

button.addEventListener("click",function(){

    createUserWithEmailAndPassword(auth, email.value, password.value)
    .then((userCredential) => {
        // Signed up 
        const user = userCredential.user;
        // ...
    })
    .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        // ..
    });
    
})


$(document).ready(function() {
  $(".info-item .btn").click(function() {
    $(".container").toggleClass("log-in");
  });
  
  $(".container-form .btn").click(function() {
    $(".container").addClass("active");
  });
});

