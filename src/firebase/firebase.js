// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth} from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB5gWUC0paCcMInifiymnofgyX63D9yQ3A",
  authDomain: "ejercicio-web-5e258.firebaseapp.com",
  projectId: "ejercicio-web-5e258",
  storageBucket: "ejercicio-web-5e258.firebasestorage.app",
  messagingSenderId: "387438585915",
  appId: "1:387438585915:web:56eda5e630948fc358941e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
//const analytics = getAnalytics(app);
const db = getFirestore(app);
const auth = getAuth(app);
export { auth, db };
