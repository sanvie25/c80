import firebase from "firebase";
require("@firebase/firestore");

var firebaseConfig = {
  apiKey: "AIzaSyCXVnNzxXHifGpO2i3i5mQbBkiZuanAC_4",
  authDomain: "barter-system-app-b822f.firebaseapp.com",
  projectId: "barter-system-app-b822f",
  storageBucket: "barter-system-app-b822f.appspot.com",
  messagingSenderId: "312604085534",
  appId: "1:312604085534:web:7701862aede5d6766c8d0f"
 
};

firebase.initializeApp(firebaseConfig);

export default firebase.firestore();
