// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth,GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// Your web app's Firebase configuration

const firebaseConfig = {
  apiKey: "AIzaSyDC3rK19BcYArxuL1C3LoGGGk-2rRgqJAY",
  authDomain: "hs-chat-c526c.firebaseapp.com",
  projectId: "hs-chat-c526c",
  storageBucket: "hs-chat-c526c.appspot.com",
  messagingSenderId: "469025803643",
  appId: "1:469025803643:web:f943c81b4810f1810741de"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
//kimlik doğrulama hizmetinin referansını alma
export const auth =getAuth(app);

//google sağlayıcısının kurulumunu yapar.
export const provider=new GoogleAuthProvider();
//veritabanının referansını al
export const db =getFirestore(app)