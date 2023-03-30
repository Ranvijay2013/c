
// ADD YOUR FIREBASE LINKS
var firebaseConfig = {
  apiKey: "AIzaSyDkicxwm_8ksGKMonm95Y2kDi3-yfvOdc4",
  authDomain: "newagent-csgt.firebaseapp.com",
  databaseURL: "https://newagent-csgt-default-rtdb.firebaseio.com",
  projectId: "newagent-csgt",
  storageBucket: "newagent-csgt.appspot.com",
  messagingSenderId: "969633186079",
  appId: "1:969633186079:web:adf60db1da52be9e15702a"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

function addUser()
{
  user_name = document.getElementById("user_name").value;
  firebase.database().ref("/").child(user_name).update({
    purpose : "adding user"
  });
}


