
// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.6.0/firebase-app.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getDatabase,set,ref,get } from "https://www.gstatic.com/firebasejs/10.6.0/firebase-database.js";


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDf60oZzwpX6Cv2IFRA0qFnAk9EtuELdVY",
  authDomain: "mynewapp-2fca4.firebaseapp.com",
  projectId: "mynewapp-2fca4",
  storageBucket: "mynewapp-2fca4.appspot.com",
  messagingSenderId: "891153260741",
  appId: "1:891153260741:web:1fac01c0334c5da265d0ac"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const  db = getDatabase(app)


//  console.log(db);














// insert Data
 function writeUserData(userID,name,email){
       set(ref(db,'users/' + userID),{
             name:name,
             email:email
       })
 }

 writeUserData(3,'ali','sa@gmail.com')
 console.log("GOOD");

//  get data

 function readUserData(){
     const usersRef = ref(db,'users');
     get(usersRef).then((snapshot)=>{
            snapshot.forEach((childSnapshot)=>{
               console.log(childSnapshot.val());
         })
     })
 }

 readUserData()