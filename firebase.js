// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {GoogleAuthProvider, getAuth} from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB6OVmSmyIL7CSYnx8qe2aaNLiW6Odnd44",
  authDomain: "emergency-services-avenir2023.firebaseapp.com",
  projectId: "emergency-services-avenir2023",
  storageBucket: "emergency-services-avenir2023.appspot.com",
  messagingSenderId: "122370493259",
  appId: "1:122370493259:web:afcd4b54fadcbda7e6f6ce",
  measurementId: "G-YCZBG66BZL"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
const provider = new GoogleAuthProvider()
const auth = getAuth()

export{app,provider,auth}

