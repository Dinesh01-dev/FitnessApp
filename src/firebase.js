import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getAuth} from "firebase/auth"

const firebaseConfig = {
  apiKey: "AIzaSyDMxydaS8HqVxmMZKVhwtchHX8dgA9y6wE",
  authDomain: "fitness-bmi.firebaseapp.com",
  projectId: "fitness-bmi",
  storageBucket: "fitness-bmi.firebasestorage.app",
  messagingSenderId: "533921454327",
  appId: "1:533921454327:web:262111a9e78bb7af4d5bf2",
  measurementId: "G-W6TSG6V54F"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth=getAuth(app);
export default app;