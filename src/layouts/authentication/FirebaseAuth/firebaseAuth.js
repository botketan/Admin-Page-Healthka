import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCN8BU7iu9fJw1kUxmbjLt-tiX2IjgrLrk",
  authDomain: "healthka-19925.firebaseapp.com",
  projectId: "healthka-19925",
  storageBucket: "healthka-19925.appspot.com",
  messagingSenderId: "496216174489",
  appId: "1:496216174489:web:0c0648ded457c7aeb86d08",
  measurementId: "G-F4E2158479"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export default app;