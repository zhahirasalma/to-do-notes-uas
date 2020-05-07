import firebase from 'firebase';
import 'firebase/auth';
// import 'firebase/firestore';

// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyAgy2k0D_v3DSYNgFIedUzQTScP1TGFnwg",
  authDomain: "todoapp-ba611.firebaseapp.com",
  databaseURL: "https://todoapp-ba611.firebaseio.com",
  projectId: "todoapp-ba611",
  storageBucket: "todoapp-ba611.appspot.com",
  messagingSenderId: "544732164949",
  appId: "1:544732164949:web:6cb999b4a9098e4f7c35dc",
  measurementId: "G-C4VDBDPQ4T"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase;