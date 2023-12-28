import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'
const firebaseConfig = {
  apiKey: "AIzaSyDcV95y7iIXTML1lJnYazVPh5_0zy6POtI",
  authDomain: "fir-auth-81c6b.firebaseapp.com",
  projectId: "fir-auth-81c6b",
  storageBucket: "fir-auth-81c6b.appspot.com",
  messagingSenderId: "753705355664",
  appId: "1:753705355664:web:279dcdee8cc95853ce4b15"
};
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)