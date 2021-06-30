import firebase from "firebase";
//Authentication
import "firebase/auth";

//realtime database
import "firebase/database";

//Storage can store images , videos , ....
import "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyDzJwKyDHBbMz84tFcOZXKCTYVEBIixVJ0",
  authDomain: "voot-efbec.firebaseapp.com",
  projectId: "voot-efbec",
  storageBucket: "voot-efbec.appspot.com",
  messagingSenderId: "723061949503",
  appId: "1:723061949503:web:965c246a035aac05c4248a",
};

firebase.initializeApp(firebaseConfig);

export default firebase;
