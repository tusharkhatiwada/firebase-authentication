import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

var config = {
    apiKey: "AIzaSyCI1g97Rt8fORJMNMekpb_CNvBKGa3T1TA",
    authDomain: "react-authentication-d1080.firebaseapp.com",
    databaseURL: "https://react-authentication-d1080.firebaseio.com",
    projectId: "react-authentication-d1080",
    storageBucket: "",
    messagingSenderId: "412569480800"
};

firebase.initializeApp(config);

const auth = firebase.auth();
const db = firebase.firestore();

export { auth, db };
