import firebase from "firebase";
//Authentication
import "firebase/auth";

//realtime database
import "firebase/database";

//Storage can store images , videos , ....
import "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyBN_AI363CTYCu_2yudWMshm3qfiPXqBOg",
  authDomain: "voot-8fef7.firebaseapp.com",
  projectId: "voot-8fef7",
  storageBucket: "voot-8fef7.appspot.com",
  messagingSenderId: "1039478055367",
  appId: "1:1039478055367:web:f81e5410b33f2a3be279e2",
};

firebase.initializeApp(firebaseConfig);

export default firebase;
