import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyC5swyz5Fnf2ErIsSRH906P6HoMHbDp-3M",
  authDomain: "clone-968fd.firebaseapp.com",
  databaseURL: "https://clone-968fd.firebaseio.com",
  projectId: "clone-968fd",
  storageBucket: "clone-968fd.appspot.com",
  messagingSenderId: "242891899497",
  appId: "1:242891899497:web:7fe0e051966c53cfccd8f8",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
