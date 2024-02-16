// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCsaZ4VMOI_ix0h1nF1v-edvfcVDYr5FgE",
  authDomain: "orcode-20903.firebaseapp.com",
  projectId: "orcode-20903",
  storageBucket: "orcode-20903.appspot.com",
  messagingSenderId: "73073575033",
  appId: "1:73073575033:web:bbb8e91977bd43957380a8",
  measurementId: "G-CEHBPZ1N4C",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const storage = getStorage();
export { app, storage };
