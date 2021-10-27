import app from "firebase/app";
import 'firebase/firestore';
import 'firebase/auth';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCyfR3Cl13RtT7P901ORA8JOF6vXpJlWSs",
  authDomain: "crudreact-9462a.firebaseapp.com",
  projectId: "crudreact-9462a",
  storageBucket: "crudreact-9462a.appspot.com",
  messagingSenderId: "125727015229",
  appId: "1:125727015229:web:f47b5b8cf00a11d88c4554"
};

// Initialize Firebase
app.initializeApp(firebaseConfig);

//Creamos dos constante que exportamos como un objeto
const db = app.firestore()
const auth = app.auth()

export {db, auth}
