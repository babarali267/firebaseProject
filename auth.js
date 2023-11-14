// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.6.0/firebase-app.js";
import { getAuth, sendSignInLinkToEmail } from "https://www.gstatic.com/firebasejs/10.6.0/firebase-auth.js";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDf60oZzwpX6Cv2IFRA0qFnAk9EtuELdVY",
  authDomain: "mynewapp-2fca4.firebaseapp.com",
  databaseURL: "https://mynewapp-2fca4-default-rtdb.firebaseio.com",
  projectId: "mynewapp-2fca4",
  storageBucket: "mynewapp-2fca4.appspot.com",
  messagingSenderId: "891153260741",
  appId: "1:891153260741:web:1fac01c0334c5da265d0ac"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);



function SignInLinkToEmail(email) {
  const actionCodeSettings = {
    url: 'https://babarali267.github.io/', // URL where the link will redirect after successful sign-in
    handleCodeInApp: true,
  };

  // Call sendSignInLinkToEmail on the auth object obtained using getAuth

  sendSignInLinkToEmail(auth, email, actionCodeSettings)
    .then(() => {
      // The link was successfully sent
      window.localStorage.setItem('emailForSignIn', email);
      console.log('Sign-in link sent to ' + email);
    })
    .catch((error) => {
      console.error(error.message);
    });
}

const SignInBtn = document.querySelector('#sign_email')

SignInBtn.addEventListener('click',()=>{
  const User_email = document.querySelector('#email').value;
  SignInLinkToEmail(User_email)
})

